import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/hangman")({
  component: RouteComponent,
});

const words = ["fast", "slow", "happy", "sad", "big", "small", "tall", "short"];

function RouteComponent() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>(
    new Array(word.length).fill("")
  );
  const [letter, setLetter] = useState("");
  const [guessesRemaining, setGuessesRemaining] = useState(5);

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function restartGame() {
    const randomWord = getRandomWord();
    setGuessedLetters(new Array(randomWord.length).fill(""));
    setGuessesRemaining(5);
    setLetter("");
    setWord(randomWord);
  }

  function handleGuess() {
    const newGuessesRemaining = guessesRemaining - 1;
    setGuessesRemaining(newGuessesRemaining);
    const newGuessedLetters = [...guessedLetters];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newGuessedLetters[i] = letter;
      }
    }
    setGuessedLetters(newGuessedLetters);
    setLetter("");

    if (newGuessedLetters.every((letter) => letter !== "")) {
      alert("You win!");
      restartGame();
    }

    if (newGuessesRemaining === 0) {
      alert("You lose!");
      restartGame();
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="flex gap-4 justify-center items-center">
        {guessedLetters.map((letter, index) => (
          <div
            key={index}
            className="p-4 size-12 bg-gray-700 text-white rounded"
          >
            {letter}
          </div>
        ))}
      </div>
      <div>Guesses Remaining: {guessesRemaining}</div>
      <div className="flex gap-4">
        <input
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <button
          onClick={handleGuess}
          className="bg-blue-500 text-white rounded p-2"
        >
          Guess
        </button>
      </div>
    </div>
  );
}
