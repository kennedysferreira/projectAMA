import { getRoomMessages } from "../http/getRoomMessages";
import { Message } from "./message";
import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMessagesWebSockets } from "../hooks/useMessageWebSockets";

export const Messages = () => {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be use in room page");
  }

  const { data } = useSuspenseQuery({
    queryKey: ["messages", roomId],
    queryFn: () => getRoomMessages({ roomId }),
  });

  useMessagesWebSockets({ roomId })

  const sortedMessages = data.messages.sort((a, b) => {
    return b.amountOfReactions - a.amountOfReactions
  })

  return (
    <ol className="list-decimal  flex flex-col gap-8 px-4">
       {sortedMessages.map(message => {
        return (
          <Message 
            key={message.id}
            id={message.id}
            text={message.text}
            amountOfReactions={message.amountOfReactions} 
            answered={message.answered} 
          />
        )
      })}
    </ol>
  );
};
