
![Logo](https://ibb.co/LYyk9Zn)

# Project AMA

This project is a real-time messaging application that allows you to create discussion rooms, send messages, reactions and updates in real time via WebSocket. The project is divided into two parts: **Backend** (API) and **Frontend** (React SPA).
## Index

- [Features](#features) 
- [Requirements](#requirements) 
- [Installation](#installation) 
  - [Backend](#backend) 
  - [Frontend](#frontend) 
- [Using the API](#usingtheAPI) 
- [WebSockets](#websockets) 
- [Technologies](#technologies)

## Features

- **Creation of Rooms:** Creation and management of discussion rooms. 
- **Realtime Messaging:** Sending and receiving messages in real time. 
- **Reactions to Messages:** Reacting to and removing reactions from messages.
- **Mark as Responded:** Messages can be marked as responded to.
- Frontend in React:** SPA (Single Page Application) built with React, using React Router and React Query for state management and data caching. 
- **Tailwind CSS:** Styling the frontend with CSS utilities. 
- **Backend with Go:** API developed in Go with communication via WebSocket.



## Requirements

- **Node.js:** Version 18 or higher 
- **Golang:** Version 1.22.5 or higher - **PostgreSQL:** Relational database for storing room and message data

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/kennedysferreira/projectAMA
   cd projectAMA/backend
   ```
2. Install the Go dependencies:

   ```bash
   go mod download
   ```

3. Run the backend:
   
  ```bash
   go run main.go
   ```

### Frontend

1. Navigate to the web folder:

   ```bash
   cd ../web
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. To run the project in development mode, run:

   ```bash
   npm run dev
   ```

# Using the API

## Backend

The API server will be started at [http://localhost:8080](http://localhost:8080). Here are some examples of using the API:

### Create a room






  

```bash
  curl -X POST http://localhost:8080/api/rooms -H "Content-Type: application/json" -d '{"theme": "Nova Sala"}'
```

### Enviar uma mensagem:

```bash
  curl -X POST http://localhost:8080/api/rooms/{room_id}/messages -H "Content-Type: application/json" -d '{"message": "Olá mundo!"}'
,.
```




    
## Frontend

After starting the frontend development server (npm run dev), go to http://localhost:5173 to interact with the application interface.




## API routes

### Rooms 
- POST /api/rooms: Creates a new room 
- GET /api/rooms: Returns all rooms 
- GET /api/rooms/{room_id}: Details of a room.

### Messages 
- POST /api/rooms/{room_id}/messages: Creates a new message in a room. 
- GET /api/rooms/{room_id}/messages: Returns all the messages in a room. 
- GET /api/rooms/{room_id}/messages/{message_id}: Details of a specific message.

### Reactions and Tags

- PATCH /api/rooms/{room_id}/messages/{message_id}/react: Adds a reaction to a message. 
- DELETE /api/rooms/{room_id}/messages/{message_id}/react: Removes a reaction from a message. 
- PATCH /api/rooms/{room_id}/messages/{message_id}/answer: Marks a message as answered.

### WebSockets 

The project uses WebSocket for real-time updates. Users can subscribe to a specific room to receive message updates.

- GET /subscribe/{room_id}: Establishes a WebSocket connection to receive real-time updates from a room.
