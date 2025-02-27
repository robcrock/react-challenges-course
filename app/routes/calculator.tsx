import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/calculator")({
  component: RouteComponent,
});

type Operator = "+" | "-" | "/" | "*" | "=";
type Input = number | Operator;
function RouteComponent() {
  const [input, setInput] = useState("");
  const inputsRef = useRef<Input[]>([]);

  function appendNumber(char: string) {
    setInput(input + char);
  }

  function clear() {
    setInput("");
    inputsRef.current = [];
  }

  function handleOperator(operator: Operator) {
    inputsRef.current.push(parseFloat(input));

    if (operator !== "=") {
      inputsRef.current.push(operator);
    }

    if (inputsRef.current.length === 3) {
      const [a, op, b] = inputsRef.current.splice(0, 3) as [
        number,
        Operator,
        number,
      ];
      let result = 0;
      if (op === "+") {
        result = a + b;
      } else if (op === "-") {
        result = a - b;
      } else if (op === "/") {
        result = a / b;
      } else if (op === "*") {
        result = a * b;
      }

      setInput(result.toString());
    } else {
      setInput("");
    }
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="grid grid-cols-4 gap-2 bg-gray-900 p-2">
        <div className="h-8 bg-gray-700 p-2 text-white col-span-4 flex items-center justify-end">
          {input}
        </div>
        <button
          onClick={() => handleOperator("+")}
          className="bg-blue-400 p-2 text-white"
        >
          +
        </button>
        <button
          onClick={() => handleOperator("-")}
          className="bg-blue-400 p-2 text-white"
        >
          -
        </button>
        <button
          onClick={() => handleOperator("/")}
          className="bg-blue-400 p-2 text-white"
        >
          /
        </button>
        <button
          onClick={() => handleOperator("*")}
          className="bg-blue-400 p-2 text-white"
        >
          *
        </button>

        <div className="col-span-3 grid grid-cols-3 gap-2">
          <button
            onClick={() => appendNumber("7")}
            className="bg-gray-400 p-2 text-white"
          >
            7
          </button>
          <button
            onClick={() => appendNumber("8")}
            className="bg-gray-400 p-2 text-white"
          >
            8
          </button>
          <button
            onClick={() => appendNumber("9")}
            className="bg-gray-400 p-2 text-white"
          >
            9
          </button>

          <button
            onClick={() => appendNumber("4")}
            className="bg-gray-400 p-2 text-white"
          >
            4
          </button>
          <button
            onClick={() => appendNumber("5")}
            className="bg-gray-400 p-2 text-white"
          >
            5
          </button>
          <button
            onClick={() => appendNumber("6")}
            className="bg-gray-400 p-2 text-white"
          >
            6
          </button>

          <button
            onClick={() => appendNumber("1")}
            className="bg-gray-400 p-2 text-white"
          >
            1
          </button>
          <button
            onClick={() => appendNumber("2")}
            className="bg-gray-400 p-2 text-white"
          >
            2
          </button>
          <button
            onClick={() => appendNumber("3")}
            className="bg-gray-400 p-2 text-white"
          >
            3
          </button>

          <button
            onClick={() => appendNumber("0")}
            className="bg-gray-400 p-2 text-white"
          >
            0
          </button>
          <button
            onClick={() => appendNumber(".")}
            className="bg-gray-400 p-2 text-white"
          >
            .
          </button>
          <button onClick={clear} className="bg-gray-400 p-2 text-white">
            C
          </button>
        </div>
        <button
          onClick={() => handleOperator("=")}
          className="flex justify-center items-center bg-blue-400 p-2 text-white"
        >
          =
        </button>
      </div>
    </div>
  );
}
