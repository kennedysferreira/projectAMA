import { ArrowRight } from "lucide-react";
import amaLogo from "../assets/amaLogo.svg";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../http/createRoom";
import { toast } from "sonner";

export const CreateRoom = () => {
  const navigate = useNavigate();
  async function handleCreateRoom(data: FormData) {
    const theme = data.get("theme")?.toString();

    if (!theme) return;

    try {
      const { roomId } = await createRoom({ theme }); 
      navigate(`/room/${roomId}`);
    } catch (error) {
      toast.error("Could not create room");
    }
    

   
  }

  return (
    <main className="h-screen px-4 flex flex-col justify-center items-center ">
      <div className="max-w-md flex flex-col gap-6">
        <img src={amaLogo} alt="ama logo" className="h-10" />
        <p className=" text-zinc-300 text-center leading-relaxed">
          Create a public AMA (Ask Me Anything) room and prioritize the most
          important questions for the community.
        </p>
        <form
          action={handleCreateRoom}
          className=" rounded-xl border-zinc-800 bg-zinc-900 border flex justify-between p-2 hover:border-zinc-700 ring-orange-400 focus-within:ring-1 "
        >
          <input
            type="text"
            required
            name="theme"
            placeholder="Room name"
            className="flex-1 bg-transparent text-zinc-100 px-2 outline-none placeholder:text-sm placeholder:text-zinc-500"
          />
          <button
            type="submit"
            className="bg-orange-400 rounded-lg py-1.5 px-3 text-sm flex gap-1.5 items-center text-zinc-950 hover:brightness-90 transition-colors duration-300 font-medium"
          >
            <p>Create room</p> <ArrowRight className="size-4 mt-1" />
          </button>
        </form>
      </div>
    </main>
  );
};
