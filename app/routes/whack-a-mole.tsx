import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/whack-a-mole")({
  component: RouteComponent,
});

const MOLE_INTERVAL = 1000;
const MOLE_HIDE_TIMEOUT = 700;
const GRID_SIZE = 4;

function RouteComponent() {
  const [holes, setHoles] = useState<boolean[][]>(
    new Array(GRID_SIZE).fill(new Array(GRID_SIZE).fill(false))
  );
  const [score, setScore] = useState(0);

  function toggleMole(rowIndex: number, colIndex: number, value: boolean) {
    setHoles((prevHoles) => {
      const newHoles = [...prevHoles.map((row) => [...row])];
      newHoles[rowIndex][colIndex] = value;
      return newHoles;
    });
  }

  function handleCellClicked(rowIndex: number, colIndex: number) {
    if (holes[rowIndex][colIndex]) {
      setScore(score + 1);
      toggleMole(rowIndex, colIndex, false);
    }
  }

  useEffect(() => {
    setInterval(() => {
      const randomRowIndex = Math.floor(Math.random() * holes.length);
      const randomColIndex = Math.floor(
        Math.random() * holes[randomRowIndex].length
      );
      toggleMole(randomRowIndex, randomColIndex, true);
      setTimeout(() => {
        toggleMole(randomRowIndex, randomColIndex, false);
      }, MOLE_HIDE_TIMEOUT);
    }, MOLE_INTERVAL);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="text-2xl font-bold">Score: {score}</div>

      {holes.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((col, colIndex) => (
            <button
              key={colIndex}
              onClick={() => handleCellClicked(rowIndex, colIndex)}
              className="text-4xl flex justify-center items-center size-24 border border-gray-200 text-white rounded"
            >
              {col ? "🐹" : ""}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
