import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/speed")({
  component: RouteComponent,
});

const randomPromptsAboutHistory = [
  "The first president of the United States was George Washington",
  "The American Civil War lasted from 1861 to 1865",
  "The Declaration of Independence was signed in 1776",
  "Ancient Egypt built the Great Pyramids around 2500 BC",
  "The Roman Empire fell in 476 AD when its last emperor was deposed",
];

function getRandomPrompt() {
  return randomPromptsAboutHistory[
    Math.floor(Math.random() * randomPromptsAboutHistory.length)
  ];
}

function RouteComponent() {
  const [prompt, setPrompt] = useState(randomPromptsAboutHistory[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [numberTyped, setNumberTyped] = useState(0);

  const promptArray = prompt.split("");
  if (currentIndex < promptArray.length) {
    promptArray[currentIndex] =
      `<span class="border border-white bg-red-400">${promptArray[currentIndex]}</span>`;
  }
  const promptString = promptArray.join("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        return;
      }

      if (endTime > 0) {
        return;
      }

      setNumberTyped((prevTyped) => prevTyped + 1);

      if (currentIndex === 0) {
        setStartTime(Date.now());
      }

      if (e.key === prompt[currentIndex]) {
        setCurrentIndex(currentIndex + 1);

        if (currentIndex + 1 === prompt.length) {
          setEndTime(Date.now());
          return;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const elaspedTimeInMs = endTime - startTime;

  function restartGame(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentIndex(0);
    setStartTime(0);
    setEndTime(0);
    setNumberTyped(0);
    setPrompt(getRandomPrompt());
    e.currentTarget.blur();
  }

  const numberOfWords = prompt.split(" ").length;

  const accuracy = Math.round((prompt.length / numberTyped) * 100);
  const isGameOver = elaspedTimeInMs > 0;
  const charactersPerMinute = Math.round(
    (prompt.length / elaspedTimeInMs) * 60 * 1000
  );
  const elaspedTimeInSeconds = elaspedTimeInMs / 1000;
  const wordsPerMinute = Math.round(
    (numberOfWords / elaspedTimeInSeconds) * 60
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div
        className="border border-white p-4"
        dangerouslySetInnerHTML={{
          __html: promptString,
        }}
      ></div>
      {isGameOver && (
        <>
          <div>{elaspedTimeInMs / 1000}s elasped time</div>
          <div>{accuracy}% accuracy</div>
          <div>{charactersPerMinute} characters per minute</div>
          <div>{wordsPerMinute} words per minute</div>
          <button className="bg-blue-500 text-white p-4" onClick={restartGame}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}
