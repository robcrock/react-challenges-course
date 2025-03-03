"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
  LucideMessageCircleQuestion,
  LucidePartyPopper,
  LucideSkull,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/rock-paper-scissors-rob")({
  component: RouteComponent,
});

type Weapon = "rock" | "paper" | "scissors";

const choices: Weapon[] = ["rock", "paper", "scissors"];

const generateRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice: Weapon, randomChoice: Weapon) => {
  if (userChoice === randomChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === "rock" && randomChoice === "scissors") ||
    (userChoice === "scissors" && randomChoice === "paper") ||
    (userChoice === "paper" && randomChoice === "rock")
  ) {
    return "You win!";
  }

  return "You lose!";
};

function RouteComponent() {
  const [userChoice, setUserChoice] = useState<Weapon | null>(null);
  const isGameActive = userChoice === null;
  const randomChoice = generateRandomChoice();

  let gameResult = "";
  if (!isGameActive) {
    gameResult = determineWinner(userChoice, randomChoice);
  }

  return (
    <main className="h-screen">
      <div className="flex flex-col items-center h-full justify-center gap-4">
        {isGameActive ? (
          <>
            <h1>Rock Paper Scissors Rob</h1>
            <div className="flex gap-2">
              {choices.map((choice) => (
                <Card
                  key={choice}
                  choice={choice}
                  handleSelection={() => setUserChoice(choice)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1>{`You chose ${userChoice}, AI chose ${randomChoice}`}</h1>
            {gameResult === "It's a tie!" && (
              <>
                <LucideMessageCircleQuestion size={64} />
                <h2 className="text-gray-400">{gameResult}</h2>
              </>
            )}
            {gameResult === "You win!" && (
              <>
                <LucidePartyPopper size={64} />
                <h2 className="text-gray-400">{gameResult}</h2>
              </>
            )}
            {gameResult === "You lose!" && (
              <>
                <LucideSkull size={64} />
                <h2 className="text-gray-400">{gameResult}</h2>
              </>
            )}
            <button
              onClick={() => {
                setUserChoice(null);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Play again
            </button>
          </>
        )}
      </div>
    </main>
  );
}

type CardProps = {
  choice: Weapon;
  handleSelection: () => void;
};

const Card = ({ choice, handleSelection }: CardProps) => {
  return (
    <button
      className="h-40 w-40 rounded-md border border-gray-600 flex items-center justify-center"
      onClick={handleSelection}
    >
      {choice}
    </button>
  );
};
