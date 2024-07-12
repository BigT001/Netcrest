import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Founder() {
  return (
    <div className="px-10">
      <div
        className="container rounded-xl flex-col lg:mt-16 pt-16 items-center 
       shadow-md border-r-black border-2 border-l-black shadow-blue-400"
      >
        <div className="text-center ">
          <h1 className="font-bold text-4xl lg:text-4xl">
            "All the difference
          </h1>

          <h4 className="text-gray-700 text-lg mt-2">
            The digital landscape has undergone a profound transformation,
            catalyzed by the global pandemic. This shift has unlocked
            unprecedented opportunities, paving the way for a surge in digital
            innovation. With the world increasingly turning to the internet for
            solutions, the possibilities are limitless. Getting your idea
            started and scaling is the reason why Netcrests is here. Don't sleep
            on your idea.
          </h4>

          <div className="flex items-center justify-center py-6 ">
            <Avatar className="w-16 h-16">
              <AvatarImage src="samuel.png" alt="founder-icon" />
              <AvatarFallback>Founder</AvatarFallback>
            </Avatar>
            <div className="pl-4">
              <h1 className="font-bold text-xl justify-start">
                Samuel Stanley
              </h1>
              <p className="flex justify-start text-l">Founder Netcrest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
