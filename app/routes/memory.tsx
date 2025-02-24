import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/memory")({
  component: RouteComponent,
});

type Emoji = {
  emoji: string;
  isVisible: boolean;
};

const GRID_SIZE = 4;
const TOTAL_PAIRS = (GRID_SIZE * GRID_SIZE) / 2;

const EMOJIS = ["🐶", "🌽", "🐱", "🍎", "🍌", "🍓", "🍇", "🍉"];

function RouteComponent() {
  const [grid, setGrid] = useState<Emoji[]>([]);
  const [lastCellIndexClicked, setLastCellIndexClicked] = useState<
    number | null
  >(null);
  const [preventClick, setPreventClick] = useState(false);
  const [pairsFound, setPairsFound] = useState(0);

  function shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  function restartGame() {
    setPairsFound(0);
    setPreventClick(false);
    setLastCellIndexClicked(null);
    initializeGrid();
  }

  function initializeGrid() {
    const emojis = [];
    const totalEmojis = GRID_SIZE * GRID_SIZE;
    let emojiIndex = 0;
    for (let i = 0; i < totalEmojis; i += 2) {
      const emoji = EMOJIS[emojiIndex];
      emojis.push({
        emoji,
        isVisible: false,
      });
      emojis.push({
        emoji,
        isVisible: false,
      });
      emojiIndex++;
    }

    shuffle(emojis);
    setGrid(emojis);
  }

  useEffect(() => {
    initializeGrid();
  }, []);

  function handleEmojiClicked(index: number) {
    if (preventClick) return;
    if (grid[index].isVisible) return;

    const newGrid = [...grid];
    newGrid[index].isVisible = true;

    const hasPreviouslyClicked = lastCellIndexClicked !== null;

    if (hasPreviouslyClicked) {
      const lastCell = newGrid[lastCellIndexClicked];
      const currentCell = newGrid[index];
      const isMatchingPair = lastCell.emoji === currentCell.emoji;

      if (isMatchingPair) {
        setPairsFound(pairsFound + 1);
      } else {
        setPreventClick(true);
        setTimeout(() => {
          newGrid[lastCellIndexClicked].isVisible = false;
          newGrid[index].isVisible = false;
          setGrid([...newGrid]);
          setPreventClick(false);
        }, 1000);
      }

      setLastCellIndexClicked(null);
    } else {
      setLastCellIndexClicked(index);
    }
    setGrid(newGrid);
  }

  const isGameOver = pairsFound === TOTAL_PAIRS;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {grid.map((emoji, index) => (
          <button
            onClick={() => handleEmojiClicked(index)}
            className="size-20 text-2xl border border-gray-300 p-4 rounded-md"
          >
            {emoji.isVisible ? emoji.emoji : ""}
          </button>
        ))}
      </div>
      <div className="text-2xl font-bold">
        {pairsFound} / {TOTAL_PAIRS}
      </div>
      {isGameOver && (
        <div className="text-2xl font-bold flex flex-col items-center gap-4">
          You Won!
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={restartGame}
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
}
