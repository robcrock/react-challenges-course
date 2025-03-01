import { createFileRoute } from "@tanstack/react-router";
import { Copy } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/password")({
  component: RouteComponent,
});

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 32;

function generatePassword(
  length: number,
  isUppercase: boolean,
  isLowercase: boolean,
  isNumbers: boolean,
  isSpecial: boolean
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let combined = "";

  if (isUppercase) {
    combined += uppercase;
  }

  if (isLowercase) {
    combined += lowercase;
  }

  if (isNumbers) {
    combined += numbers;
  }

  if (isSpecial) {
    combined += special;
  }

  const password = new Array(length)
    .fill("")
    .map(() => {
      const randomCharacterIndex = Math.floor(Math.random() * combined.length);
      const randomCharacter = combined[randomCharacterIndex];
      return randomCharacter;
    })
    .join("");

  return password;
}

function RouteComponent() {
  const [passwordLength, setPasswordLength] = useState("12");
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSpecial, setIsSpecial] = useState(true);

  const password = generatePassword(
    parseInt(passwordLength),
    isUppercase,
    isLowercase,
    isNumbers,
    isSpecial
  );

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="flex flex-col bg-white rounded p-12 w-1/2 gap-4">
        <div className="flex flex-row gap-4">
          <input
            type="number"
            min={MIN_PASSWORD_LENGTH}
            max={MAX_PASSWORD_LENGTH}
            className="bg-gray-600 px-2 py-1 text-lg rounded w-16"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <input
            type="range"
            min={MIN_PASSWORD_LENGTH}
            max={MAX_PASSWORD_LENGTH}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="text-black grid grid-cols-2 gap-4">
          <label className="flex flex-row gap-2">
            <input disabled checked={isUppercase} type="checkbox" />
            Uppercase
          </label>

          <label className="flex flex-row gap-2">
            <input
              checked={isLowercase}
              type="checkbox"
              onChange={(e) => setIsLowercase(e.target.checked)}
            />
            Lowercase
          </label>

          <label className="flex flex-row gap-2">
            <input
              checked={isNumbers}
              type="checkbox"
              onChange={(e) => setIsNumbers(e.target.checked)}
            />
            Numbers
          </label>

          <label className="flex flex-row gap-2">
            <input
              checked={isSpecial}
              type="checkbox"
              onChange={(e) => setIsSpecial(e.target.checked)}
            />
            Special
          </label>
        </div>
      </div>

      <div className="flex  bg-white rounded p-12 w-1/2 gap-4">
        <input
          value={password}
          className="bg-gray-600 px-2 py-1 text-lg rounded"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
          className="text-black"
        >
          <Copy />
        </button>
      </div>
    </div>
  );
}
