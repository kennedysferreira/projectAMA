import { ArrowRight } from "lucide-react";
import { createMessage } from "../http/createMessage";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

export const CreateMessageForm = () => {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be use in room page");
  }

  async function createMessageAction(data: FormData) {
    const message = data.get("message")?.toString();

    if (!message || !roomId) return;

    try {
      await createMessage({message, roomId});
    } catch (error) {
      toast.error("Could not create message");
    }
  }

  return (
    <form
      action={createMessageAction}
      className=" rounded-xl border-zinc-800 bg-zinc-900 border flex justify-between p-2 hover:border-zinc-700 ring-orange-400 focus-within:ring-1 "
    >
      <input
        type="text"
        required
        name="message"
        placeholder="What's your question?"
        className="flex-1 bg-transparent text-zinc-100 px-2 outline-none placeholder:text-sm placeholder:text-zinc-500"
      />
      <button
        type="submit"
        className="bg-orange-400 rounded-lg py-1.5 px-3 text-sm flex gap-1.5 items-center text-zinc-950 hover:brightness-90 transition-colors duration-300 font-medium"
      >
        <p>Create question</p> <ArrowRight className="size-4 mt-1" />
      </button>
    </form>
  );
};
