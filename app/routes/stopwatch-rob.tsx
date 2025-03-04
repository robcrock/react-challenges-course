import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useReducer, useState } from "react";

export const Route = createFileRoute("/stopwatch-rob")({
  component: RouteComponent,
});

type State = "idle" | "running" | "paused";

type StopwatchState = {
  currentTime: number;
  timerState: State;
};

type ActionTypes = "run" | "pause" | "reset" | "increment";

const reducer = (
  state: StopwatchState,
  action: { type: ActionTypes },
): StopwatchState => {
  switch (action.type) {
    case "run":
      return { ...state, timerState: "running" };
    case "pause":
      return { ...state, timerState: "paused" };
    case "reset":
      return { ...state, timerState: "idle", currentTime: 0 };
    case "increment":
      return { ...state, currentTime: state.currentTime + 1 };
    default:
      return state;
  }
};

function RouteComponent() {
  const [state, dispatch] = useReducer(reducer, {
    currentTime: 0,
    timerState: "idle",
  });

  const { timerState, currentTime } = state;

  useEffect(() => {
    if (timerState !== "running") return;

    const intervalId = setInterval(() => {
      dispatch({ type: "increment" });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timerState]);

  return (
    <div className="h-screen container mx-auto flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-1/5 min-h-52 h-1/5 bg-gray-200 p-4 rounded-lg">
        <p className="text-center text-3xl text-gray-700">{currentTime}</p>
        <div className="flex justify-center">
          <ButtonSection stopwatchState={timerState} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

type ButtonSectionProps = {
  stopwatchState: State;
  dispatch: (action: { type: ActionTypes }) => void;
};

const ButtonSection = ({ stopwatchState, dispatch }: ButtonSectionProps) => {
  if (stopwatchState === "idle") {
    return (
      <button
        className="border border-gray-400 rounded-lg h-10 w-20 text-gray-700"
        onClick={() => dispatch({ type: "run" })}
      >
        Start
      </button>
    );
  }

  if (stopwatchState === "running") {
    return (
      <button
        className="border border-gray-400 rounded-lg h-10 w-20 text-gray-700"
        onClick={() => dispatch({ type: "pause" })}
      >
        Stop
      </button>
    );
  }

  return (
    <div className="flex gap-2">
      <button
        className="border border-gray-400 rounded-lg h-10 w-20 text-gray-700"
        onClick={() => dispatch({ type: "run" })}
      >
        Resume
      </button>
      <button
        className="border border-gray-400 rounded-lg h-10 w-20 text-gray-700"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};
