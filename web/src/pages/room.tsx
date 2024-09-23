import { useParams } from "react-router-dom";
import amaLogo from "../assets/amaLogo.svg";
import { toast } from "sonner";
import { Messages } from "../components/messages";
import { Suspense } from "react";
import { Share2 } from "lucide-react";
import { CreateMessageForm} from "../components/createMessageForm";

export const Room = () => {
  const { roomId } = useParams();

  function handleShareRoom() {
    const url = window.location.href.toString();

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);

      toast.success("Link copied to clipboard!");
    }
  }

  return (
    <div className="h-screen flex flex-col max-w-2xl mx-auto gap-6 px-4">
      <header className="flex justify-between items-center px-4 mt-10">
        <div className="flex gap-4 items-center">
          <img src={amaLogo} alt="AMA logo" />
          <p className="text-zinc-500 text-sm truncate">
            Room number: <span className="text-zinc-300">{roomId}</span>{" "}
          </p>
        </div>
        <button
          onClick={handleShareRoom}
          className="flex gap-2 items-center text-zinc-300 font-medium bg-zinc-800 rounded-lg py-1.5 px-5 hover:brightness-110"
        >
          <p>Share</p>
          <Share2 className="size-4" />
        </button>
      </header>

      <div className="h-px bg-zinc-900"></div>

      <CreateMessageForm/>

      <Suspense fallback={<div>Loading...</div>}>
        <Messages />
      </Suspense>
    </div>
  );
};
