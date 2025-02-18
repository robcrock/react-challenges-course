import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/stopwatch")({
  component: RouteComponent,
});

function RouteComponent() {
  const [elasped, setElapsed] = useState(0);
  const [state, setState] = useState<"initial" | "running" | "paused">(
    "initial"
  );
  const intervalRef = useRef<NodeJS.Timeout>(null);

  function start() {
    setState("running");
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
  }

  function clear() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function pause() {
    setState("paused");
    clear();
  }

  function reset() {
    setState("initial");
    setElapsed(0);
    clear();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-50 rounded p-12 flex flex-col items-center gap-4">
        <div>{elasped} seconds elapsed</div>

        {state === "initial" && (
          <button
            onClick={start}
            className="bg-green-500 text-white rounded p-4"
          >
            Start
          </button>
        )}

        {state === "running" && (
          <button
            onClick={pause}
            className="bg-gray-500 text-white rounded p-4"
          >
            Pause
          </button>
        )}

        {state === "paused" && (
          <div className="flex gap-4">
            <button
              onClick={start}
              className="bg-gray-500 text-white rounded p-4"
            >
              Resume
            </button>
            <button
              onClick={reset}
              className="bg-red-500 text-white rounded p-4"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
