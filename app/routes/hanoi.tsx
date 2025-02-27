import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/hanoi")({
  component: RouteComponent,
});

function RouteComponent() {
  const [towers, setTowers] = useState<number[][]>([[3, 2, 1], [], []]);
  const [selectedTower, setSelectedTower] = useState<number | undefined>(
    undefined
  );

  function handleClickTower(clickedTowerIndex: number) {
    if (selectedTower !== undefined) {
      const newTowers = [...towers.map((tower) => [...tower])];
      const fromTower = newTowers[selectedTower];
      const toTower = newTowers[clickedTowerIndex];
      const lastTower = newTowers[2];

      const fromValue = fromTower[fromTower.length - 1];
      const toValue = toTower[toTower.length - 1];

      if (toValue === undefined || fromValue < toValue) {
        fromTower.pop();
        toTower.push(fromValue);
        setTowers(newTowers);
        setSelectedTower(undefined);
        if (lastTower.length === 3) {
          alert("You win!");
        }
      }
    } else {
      setSelectedTower(clickedTowerIndex);
    }
  }

  return (
    <div className="relative flex gap-32 justify-center items-center h-screen w-full">
      {towers.map((tower, towerIndex) => (
        <button
          onClick={() => handleClickTower(towerIndex)}
          key={`tower-${towerIndex}`}
          className="flex flex-col items-center relative"
        >
          {tower.map((diskSize, diskIndex) => (
            <div
              key={`{disk-${diskIndex}`}
              className="border border-white h-8 absolute"
              style={{
                width: `${diskSize * 30}px`,
                bottom: `${diskIndex * 32}px`,
              }}
            ></div>
          ))}
          <div
            className={
              "h-32 w-1 " +
              (selectedTower === towerIndex ? "bg-blue-400" : "bg-white")
            }
          ></div>
        </button>
      ))}
    </div>
  );
}
