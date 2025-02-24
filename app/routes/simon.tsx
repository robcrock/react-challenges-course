import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/simon")({
  component: RouteComponent,
});

const GREEN = 0;
const RED = 1;
const YELLOW = 2;
const BLUE = 3;

const FLASH_TIME = 700;
const FLASH_TIME_BEFORE = 500;

function RouteComponent() {
  const sequenceRef = useRef<number[]>([getRandomSegmentIndex()]);
  const playerIndexRef = useRef<number>(0);
  const [flashIndex, setFlashIndex] = useState<number | undefined>(undefined);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  function getRandomSegmentIndex() {
    return Math.floor(Math.random() * 4);
  }

  function flashSequence(index: number) {
    if (index >= sequenceRef.current.length) {
      setFlashIndex(undefined);
      setIsPlayerTurn(true);
      return;
    }
    const value = sequenceRef.current[index];
    setFlashIndex(value);

    setTimeout(() => {
      setFlashIndex(undefined);
    }, FLASH_TIME_BEFORE);

    setTimeout(() => {
      flashSequence(index + 1);
    }, FLASH_TIME);
  }

  useEffect(() => {
    flashSequence(0);
  }, []);

  function handleSegmentClicked(clickedValue: number) {
    const sequenceValue = sequenceRef.current[playerIndexRef.current];

    if (clickedValue !== sequenceValue) {
      alert("you lost");
      setIsPlayerTurn(false);
      sequenceRef.current = [getRandomSegmentIndex()];
      playerIndexRef.current = 0;
      flashSequence(0);
      return;
    }
    playerIndexRef.current++;

    if (playerIndexRef.current === sequenceRef.current.length) {
      sequenceRef.current.push(getRandomSegmentIndex());
      playerIndexRef.current = 0;
      setIsPlayerTurn(false);
      flashSequence(0);
    }
  }

  return (
    <div className="flex flex-col items-center pt-12 h-screen">
      <div className="relative top-[200px]">
        <button
          onClick={() => handleSegmentClicked(GREEN)}
          disabled={!isPlayerTurn}
          className={
            "hover:disabled:opacity-50 hover:opacity-75 absolute bottom-0 left-0 w-32 h-32 bg-green-500 rounded-tr-full " +
            (flashIndex === GREEN ? "" : "opacity-50")
          }
        ></button>
        <button
          onClick={() => handleSegmentClicked(RED)}
          disabled={!isPlayerTurn}
          className={
            "hover:disabled:opacity-50 hover:opacity-75 absolute left-0 w-32 h-32 bg-red-500 rounded-br-full " +
            (flashIndex === RED ? "" : "opacity-50")
          }
        ></button>
        <button
          onClick={() => handleSegmentClicked(YELLOW)}
          disabled={!isPlayerTurn}
          className={
            "hover:disabled:opacity-50 hover:opacity-75 absolute right-0 w-32 h-32 bg-yellow-500 rounded-bl-full " +
            (flashIndex === YELLOW ? "" : "opacity-50")
          }
        ></button>
        <button
          onClick={() => handleSegmentClicked(BLUE)}
          disabled={!isPlayerTurn}
          className={
            "hover:disabled:opacity-50 hover:opacity-75 absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-tl-full " +
            (flashIndex === BLUE ? "" : "opacity-50")
          }
        ></button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-24 bg-gray-800 rounded-full"></div>
      </div>
      {isPlayerTurn && <div className="text-2xl font-bold">Your turn</div>}
    </div>
  );
}
