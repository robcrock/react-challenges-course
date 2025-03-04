import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/dice-rob")({
  component: RouteComponent,
});

const roll = () => Math.floor(Math.random() * 6) + 1;

function RouteComponent() {
  const [number, setNumber] = useState<number | undefined>();

  const handleRoll = () => {
    const randomNumber = roll();
    setNumber(randomNumber);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      {number !== undefined && <Dice number={number} />}
      <button
        className="px-4 py-2 rounded-md border border-gray-700"
        onClick={handleRoll}
      >
        Roll
      </button>
    </div>
  );
}

const Dice = ({ number }: { number: number }) => {
  return (
    <div className="h-20 w-20 rounded-md border border-gray-600 p-4">
      {number === 1 && (
        <div className="h-full w-full grid place-items-center">
          <Dot />
        </div>
      )}

      {number === 2 && (
        <div className="h-full w-full grid grid-cols-2 grid-rows-2">
          <Dot className="justify-self-start self-start" />
          <div />
          <div />
          <Dot className="justify-self-end self-end" />
        </div>
      )}

      {number === 3 && (
        <div className="h-full w-full grid grid-cols-3 grid-rows-3">
          <Dot className="justify-self-start self-start col-start-1 row-start-1" />
          <Dot className="justify-self-center self-center col-start-2 row-start-2" />
          <Dot className="justify-self-end self-end col-start-3 row-start-3" />
        </div>
      )}

      {number === 4 && (
        <div className="h-full w-full grid grid-cols-2 grid-rows-2">
          <Dot className="justify-self-start self-start" />
          <Dot className="justify-self-end self-start" />
          <Dot className="justify-self-start self-end" />
          <Dot className="justify-self-end self-end" />
        </div>
      )}

      {number === 5 && (
        <div className="h-full w-full grid grid-cols-3 grid-rows-3">
          <Dot className="justify-self-start self-start col-start-1 row-start-1" />
          <Dot className="justify-self-end self-start col-start-3 row-start-1" />
          <Dot className="justify-self-center self-center col-start-2 row-start-2" />
          <Dot className="justify-self-start self-end col-start-1 row-start-3" />
          <Dot className="justify-self-end self-end col-start-3 row-start-3" />
        </div>
      )}

      {number === 6 && (
        <div className="h-full w-full grid grid-cols-2 grid-rows-3">
          <Dot className="justify-self-start self-start" />
          <Dot className="justify-self-end self-start" />
          <Dot className="justify-self-start self-center" />
          <Dot className="justify-self-end self-center" />
          <Dot className="justify-self-start self-end" />
          <Dot className="justify-self-end self-end" />
        </div>
      )}
    </div>
  );
};

const Dot = ({ className = "" }: { className?: string }) => {
  return <div className={`h-2 w-2 bg-white rounded-full ${className}`}></div>;
};
