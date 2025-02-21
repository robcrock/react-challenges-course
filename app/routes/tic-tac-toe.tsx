import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/tic-tac-toe")({
  component: RouteComponent,
});

type Token = "X" | "O" | "";

function RouteComponent() {
  const [grid, setGrid] = useState<Token[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<"X" | "O" | "Tie" | "None">("None");

  useEffect(() => {
    const winner = checkWin();
    if (winner !== "None") {
      setWinner(winner);
    }
  }, [grid]);

  function checkWin(): "X" | "O" | "Tie" | "None" {
    // check the rows for winners
    for (let i = 0; i < 3; i++) {
      const row = grid[i];
      if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
        return row[0];
      }
    }

    // check the columns for winners
    for (let i = 0; i < 3; i++) {
      const col = grid.map((row) => row[i]);
      if (col[0] === col[1] && col[1] === col[2] && col[0] !== "") {
        return col[0];
      }
    }

    // check the top left to bottom right diagonal
    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] !== ""
    ) {
      return grid[0][0];
    }

    // check the bottom left to top right diagonal
    if (
      grid[2][0] === grid[1][1] &&
      grid[1][1] === grid[0][2] &&
      grid[2][0] !== ""
    ) {
      return grid[2][0];
    }

    const isTie = grid.every((row) => row.every((cell) => cell !== ""));
    if (isTie) {
      return "Tie";
    }

    return "None";
  }

  function resetGame() {
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setWinner("None");
  }

  function handleCellClicked(rowIndex: number, colIndex: number) {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid.map((row) => [...row])];
      newGrid[rowIndex][colIndex] = currentPlayer;
      return newGrid;
    });
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center">
      {winner !== "None" && (
        <div>
          <div className="text-2xl">{winner} wins!</div>
          <button
            className="bg-gray-800 text-white p-2 rounded"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}

      <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 text-black">
        {grid.map((row, rowIndex) => (
          <div className="flex gap-2">
            {row.map((piece, colIndex) => (
              <button
                onClick={() => handleCellClicked(rowIndex, colIndex)}
                disabled={piece !== "" || winner !== "None"}
                className="text-2xl bg-gray-800 size-20 text-white flex justify-center items-center"
              >
                {piece}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
