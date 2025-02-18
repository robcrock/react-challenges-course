import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/dice")({
  component: RouteComponent,
});

function RouteComponent() {
  const [number, setNumber] = useState<number | undefined>();

  return (
    <div>
      <button
        className="bg-gray-500 rounded p-4"
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          setNumber(randomNumber);
        }}
      >
        Roll
      </button>
      {number !== undefined && <Dice number={number} />}
    </div>
  );
}

function Dice({ number }: { number: number }) {
  return (
    <div className="bg-gray-50 rounded p-4 size-24 text-black flex items-center justify-center gap-4">
      {number === 1 && <p className="bg-black rounded-full size-5"></p>}
      {number === 2 && (
        <>
          <p className="bg-black rounded-full size-5"></p>
          <p className="bg-black rounded-full size-5"></p>
        </>
      )}
      {number === 3 && (
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-start">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-end">
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 4 && (
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex justify-center gap-4">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center gap-4">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 5 && (
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-center gap-6">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center">
            <p className="bg-black rounded-full size-5"></p>
          </div>
          <div className="w-full flex justify-center gap-6">
            <p className="bg-black rounded-full size-5"></p>
            <p className="bg-black rounded-full size-5"></p>
          </div>
        </div>
      )}
      {number === 6 && (
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex justify-center gap-2">
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
          </div>
          <div className="w-full flex justify-center gap-2">
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
            <p className="bg-black rounded-full size-4"></p>
          </div>
        </div>
      )}
    </div>
  );
}
