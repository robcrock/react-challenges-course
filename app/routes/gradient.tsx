import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gradient")({
  component: RouteComponent,
});

function RouteComponent() {
  const [from, setFrom] = useState("#000000");
  const [to, setTo] = useState("#ffffff");
  const [direction, setDirection] = useState("left");

  return (
    <div className="flex gap-8 p-12 h-screen">
      <form className="p-4 bg-gray-800 rounded flex flex-col gap-2">
        <label htmlFor="from">From Hex</label>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-gray-300 text-black px-2 rounded"
          name="from"
        />

        <label htmlFor="to">To Hex</label>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-gray-300 text-black px-2 rounded"
          name="to"
        />

        <label htmlFor="direction">Direction</label>
        <select
          name="direction"
          className="bg-gray-300 text-black p-2 rounded"
          value={direction}
          onChange={(e) => {
            setDirection(e.target.value);
          }}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </form>

      <div
        className="bg-green-400 flex-grow rounded"
        style={{
          background: `linear-gradient(to ${direction}, ${from}, ${to})`,
        }}
      ></div>
    </div>
  );
}
