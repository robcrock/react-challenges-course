import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/histogram")({
  component: RouteComponent,
});

const allLettersInAlphabet = "abcdefghijklmnopqrstuvwxyz";

type Histogram = { [key: string]: number };

function getBlankHistogram(): Histogram {
  return allLettersInAlphabet.split("").reduce((obj, char) => {
    obj[char] = 0;
    return obj;
  }, {} as Histogram);
}

function RouteComponent() {
  const [input, setInput] = useState("");
  const [histogram, setHistogram] = useState<Histogram>(getBlankHistogram());

  function calculateHistogram(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const chars = input.split("").filter((char) => char !== " ");
    const newHistogram = getBlankHistogram();
    for (let char of chars) {
      newHistogram[char]++;
    }
    setHistogram(newHistogram);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <form onSubmit={calculateHistogram} className="flex gap-4">
        <input
          className="bg-gray-500 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 p-2 hover:bg-blue-600">submit</button>
      </form>

      <div
        className="border border-white p-8 gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(26, 1fr)",
        }}
      >
        {allLettersInAlphabet.split("").map((char) => (
          <div className="text-center flex flex-col justify-end">
            <div
              className="bg-blue-400 w-4 text-xs"
              style={{
                height: `${histogram[char] * 20}px`,
              }}
            >
              {histogram[char] > 0 && histogram[char]}
            </div>
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}
