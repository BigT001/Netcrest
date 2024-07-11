import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Wordflip() {
  const words = ["Fast", "dynamic", "interactive", "Secured"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
       We Build
        <FlipWords words={words} /> <br />
        Web applications
      </div>
    </div>
  );
}
