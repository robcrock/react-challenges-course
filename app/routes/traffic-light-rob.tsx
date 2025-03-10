import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/traffic-light-rob")({
  component: RouteComponent,
});

type Light = {
  color: string;
  delay: number;
};

const STOP_LIGHT: Light[] = [
  { color: "green", delay: 5000 },
  { color: "yellow", delay: 1000 },
  { color: "red", delay: 5000 },
];

function RouteComponent() {
  return (
    <div className="flex items-center justify-center gap-4">
      <TrafficLight initialPosition={0} />
      <TrafficLight initialPosition={1} />
      <TrafficLight initialPosition={2} />
    </div>
  );
}

function TrafficLight({ initialPosition }: { initialPosition: number }) {
  const [tick, setTick] = useState(initialPosition);
  const currentIndex = tick % STOP_LIGHT.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, STOP_LIGHT[currentIndex].delay);

    return () => clearInterval(intervalId);
  }, [tick]);

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-2">
      <div
        className={`h-40 w-40 rounded-full border bg-red-500  ${STOP_LIGHT[currentIndex].color === "red" ? "opacity-100" : "opacity-50"}`}
      />
      <div
        className={`h-40 w-40 rounded-full border border-white/20 bg-yellow-500  ${STOP_LIGHT[currentIndex].color === "yellow" ? "opacity-100" : "opacity-50"}`}
      />
      <div
        className={`h-40 w-40 rounded-full border border-white/20 bg-green-500  ${STOP_LIGHT[currentIndex].color === "green" ? "opacity-100" : "opacity-50"}`}
      />
    </div>
  );
}
