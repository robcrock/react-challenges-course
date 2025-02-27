import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/connect-four")({
  component: RouteComponent,
});

const RED = 1;
const BLUE = 2;
const EMPTY = undefined;

type Piece = typeof RED | typeof BLUE | typeof EMPTY;

const ROWS = 6;
const COLUMNS = 7;

function RouteComponent() {
  const [isRedTurn, setIsRedTurn] = useState(true);
  const [board, setBoard] = useState<Piece[][]>(
    new Array(ROWS).fill(new Array(COLUMNS).fill(EMPTY))
  );

  function handleCellClicked(columnIndex: number) {
    for (let rowIndex = ROWS - 1; rowIndex >= 0; rowIndex--) {
      const cell = board[rowIndex][columnIndex];
      if (cell === EMPTY) {
        const newBoard = [...board.map((row) => [...row])];
        newBoard[rowIndex][columnIndex] = isRedTurn ? RED : BLUE;
        setIsRedTurn(!isRedTurn);
        setBoard(newBoard);
        checkForWin(newBoard, rowIndex, columnIndex);
        break;
      }
    }
  }

  function checkForWin(currentBoard: Piece[][], row: number, column: number) {
    if (
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r, c + 1],
          [r, c - 1],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r + 1, c],
          [r - 1, c],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r + 1, c + 1],
          [r - 1, c - 1],
        ],
        row,
        column
      ) >= 4 ||
      checkForDirectionalWin(
        currentBoard,
        (r, c) => [
          [r - 1, c + 1],
          [r + 1, c - 1],
        ],
        row,
        column
      ) >= 4
    ) {
      setTimeout(() => {
        alert(isRedTurn ? "Red wins" : "Blue wins");
        reset();
      }, 1);
    }
  }

  function reset() {
    setBoard(new Array(ROWS).fill(new Array(COLUMNS).fill(EMPTY)));
    setIsRedTurn(true);
  }

  function checkForDirectionalWin(
    currentBoard: Piece[][],
    getDirections: (
      row: number,
      column: number
    ) => [[number, number], [number, number]],
    row: number,
    column: number,
    seen: Set<string> = new Set()
  ) {
    let sum = 0;

    if (row < 0 || row >= ROWS || column < 0 || column >= COLUMNS) {
      return 0;
    }

    if (seen.has(`${row} ${column}`)) {
      return 0;
    }

    seen.add(`${row} ${column}`);

    if (currentBoard[row][column] === (isRedTurn ? RED : BLUE)) {
      sum++;
    }

    const directions = getDirections(row, column);

    sum +=
      checkForDirectionalWin(
        currentBoard,
        getDirections,
        directions[0][0],
        directions[0][1],
        seen
      ) +
      checkForDirectionalWin(
        currentBoard,
        getDirections,
        directions[1][0],
        directions[1][1],
        seen
      );

    return sum;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Connect Four</h1>

      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, columnIndex) => (
              <button
                disabled={cell !== EMPTY}
                key={rowIndex + " " + columnIndex}
                className="w-10 h-10 border border-white"
                onClick={() => handleCellClicked(columnIndex)}
              >
                {cell === RED && (
                  <div className="w-full h-full rounded-full bg-red-500"></div>
                )}
                {cell === BLUE && (
                  <div className="w-full h-full rounded-full bg-blue-500"></div>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
