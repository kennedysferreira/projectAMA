import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createMessageReaction } from "../http/createMessageReaction";
import { removeMessageReaction } from "../http/removeMessageReaction";
import { toast } from "sonner";

interface MessageProps {
  id: string;
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}
export const Message = ({
  id: messageId,
  text,
  amountOfReactions,
  answered = false,
}: MessageProps) => {
  const { roomId } = useParams();
  const [hasReacted, setHasReacted] = useState(false);

  if (!roomId) {
    throw new Error("Messages components must be use in room page");
  }

  async function createMessageReactionAction() {
    if (!roomId) return;
    try {
      await createMessageReaction({ messageId, roomId });
    } catch (error) {
      toast.error("Could not create message reaction");
    }

    setHasReacted(true);
  }

  async function removeMessageReactionAction() {
    if (!roomId) return;
    try {
      await removeMessageReaction({ messageId, roomId });
    } catch (error) {
      toast.error("Could not remove message reaction");
    }

    setHasReacted(false);
  }

  return (
    <>
      <li
        data-answered={answered}
        className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
      >
        {text}
        {hasReacted ? (
          <button
          type="button"
            onClick={removeMessageReactionAction}
            className="text-orange-400 flex mt-3 gap-2 items-center font-medium text-sm hover:brightness-90 transition-colors duration-300 "
          >
            <ArrowUp className="size-4" /> Like question ({amountOfReactions})
          </button>
        ) : (
          <button
          type="button"
            onClick={createMessageReactionAction}
            className="text-zinc-400 flex mt-3 gap-2 items-center font-medium text-sm hover:brightness-90 transition-colors duration-300 "
          >
            <ArrowUp className="size-4" /> Like question ({amountOfReactions})
          </button>
        )}
      </li>
    </>
  );
};
