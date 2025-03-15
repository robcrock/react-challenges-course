import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/gradient-rob")({
  component: RouteComponent,
});

function RouteComponent() {
  const [fromHex, setFromHex] = useState("#2563eb");
  const [toHex, setToHex] = useState("#7c3aed");
  const [direction, setDirection] = useState("");

  const handleFromHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromHex(e.target.value);
  };

  const handleToHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToHex(e.target.value);
  };

  const handleDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDirection(e.target.value);
  };

  return (
    <div className="h-screen flex gap-10 border-2 border-red-500 p-8">
      <div className="space-y-6 h-full max-w-96 p-8 border border-gray-700 rounded">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="from-hex">From</label>
            <input
              id="from-hex"
              name="from-hex"
              type="color"
              value={fromHex}
              onChange={handleFromHexChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="to-hex">To</label>
            <input
              id="to-hex"
              name="to-hex"
              type="color"
              value={toHex}
              onChange={handleToHexChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="direction">Direction</label>
          <select value={direction} onChange={handleDirectionChange}>
            <option value="top">Select a value</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
      <div
        className={"flex-1 w-full border border-gray-700 rounded"}
        style={{
          background: `linear-gradient(to ${direction || "top"}, ${fromHex}, ${toHex})`,
        }}
      ></div>
    </div>
  );
}
