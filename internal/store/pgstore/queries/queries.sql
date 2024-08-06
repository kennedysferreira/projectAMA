-- name: GetRoom :one
SELECT "id", "theme"
FROM rooms
WHERE id = $1;

-- name: GetRooms :many
SELECT "id", "theme"
FROM rooms;

-- name: InsertRoom :one
INSERT INTO rooms ("theme")
VALUES ($1)
RETURNING "id";

-- name: GetMessage :one
SELECT "id", "message", "room_id", "reaction_count", "answered"
FROM messages
WHERE id = $1;

-- name: GetMessages :many
SELECT "id", "message", "room_id", "reaction_count", "answered"
FROM messages
WHERE room_id = $1;

-- name: InsertMessage :one
INSERT INTO messages ("message", "room_id")
VALUES ($1, $2)
RETURNING "id";

-- name: ReactMessage :one
UPDATE messages
SET reaction_count = reaction_count + 1
WHERE id = $1
RETURNING "reaction_count";

-- name: RemoveReaction :one
UPDATE messages
SET reaction_count = reaction_count - 1
WHERE id = $1
RETURNING "reaction_count";

-- name: MarkAsAnswered :one
UPDATE messages
SET answered = true
WHERE id = $1
RETURNING "answered";
