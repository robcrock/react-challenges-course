import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  BrickWall,
  Scroll,
  Skull,
  PartyPopper,
  Handshake,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/rock-paper-scissors")({
  component: RouteComponent,
});

type Weapon = "rock" | "paper" | "scissors";
const weapons = ["rock", "paper", "scissors"] as const;

function RouteComponent() {
  const [userChoice, setUserChoice] = useState<Weapon | null>(null);
  const [aiChoice, setAiChoice] = useState<Weapon | null>(null);
  const [gameState, setGameState] = useState<"playing" | "done">("playing");

  function handlerUserChoice(weapon: Weapon) {
    setUserChoice(weapon);
    const randomIndex = Math.floor(Math.random() * weapons.length);
    const randomWeapon = weapons[randomIndex];
    setAiChoice(randomWeapon);
    setGameState("done");
  }

  function getResult() {
    let message = <></>;

    if (userChoice === aiChoice) {
      message = (
        <>
          <Handshake className="size-12" />
          Draw
        </>
      );
    } else if (
      (userChoice === "rock" && aiChoice === "scissors") ||
      (userChoice === "paper" && aiChoice === "rock") ||
      (userChoice === "scissors" && aiChoice === "paper")
    ) {
      message = (
        <>
          <PartyPopper className="size-12" />
          You Win
        </>
      );
    } else {
      message = (
        <>
          <Skull className="size-12" /> You lose
        </>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        {message}
      </div>
    );
  }

  function restartGame() {
    setUserChoice(null);
    setAiChoice(null);
    setGameState("playing");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      {gameState === "playing" ? (
        <>
          <h1>Pick your Weapon</h1>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => {
                handlerUserChoice("rock");
              }}
              className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 w-52 h-80"
            >
              <BrickWall className="size-12" />
              ROCK
            </button>
            <button
              onClick={() => {
                handlerUserChoice("paper");
              }}
              className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 w-52 h-80"
            >
              <Scroll className="size-12" />
              PAPER
            </button>
            <button
              onClick={() => {
                handlerUserChoice("scissors");
              }}
              className="flex flex-col gap-4 justify-center items-center p-8 border border-gray-500 rounded bg-gray-900 w-52 h-80"
            >
              <Scissors className="size-12" />
              SCISSORS
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            You chose {userChoice}, AI chose {aiChoice}
          </p>
          <p>{getResult()}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={restartGame}
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
}
