import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/split")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-screen">
      <Cell isVertical={false} />
    </div>
  );
}

function getRandomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function Cell({ isVertical }: { isVertical: boolean }) {
  const [cells, setCells] = useState<string[]>([]);
  const [color, setColor] = useState<string>(getRandomHex());

  function split() {
    setCells([...cells, getRandomId(), getRandomId()]);
  }

  return (
    <div
      className={"w-full h-full flex " + (isVertical ? "flex-col" : "flex-row")}
    >
      {cells.length === 0 && (
        <button
          onClick={split}
          style={{
            backgroundColor: color,
          }}
          className="w-full h-full"
        >
          +
        </button>
      )}
      {cells.map((cell) => (
        <Cell key={cell} isVertical={!isVertical} />
      ))}
    </div>
  );
}
