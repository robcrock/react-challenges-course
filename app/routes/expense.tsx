import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/expense")({
  component: RouteComponent,
});

type Entry = {
  amount: number;
  type: "expense" | "revenue";
};

function RouteComponent() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"expense" | "revenue">("expense");

  function handleAddEntry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEntries([...entries, { amount: Number(amount), type }]);
    setAmount("");
  }

  const total = entries.reduce((acc, entry) => {
    return acc + (entry.type === "expense" ? -entry.amount : entry.amount);
  }, 0);

  function handleRemoveEntry(index: number) {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col justify-center items-center p-16 gap-8">
      <form onSubmit={handleAddEntry} className="flex gap-4">
        <input
          className="bg-white border p-2 text-black"
          type="number"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value as "expense" | "revenue")}
          className="bg-white border p-2 text-black"
        >
          <option value="expense">Expense</option>
          <option value="revenue">Revenue</option>
        </select>

        <button className="bg-blue-400 border p-2 text-black">Add</button>
      </form>

      <div className="flex flex-col gap-4">
        {entries.map((entry, index) => (
          <div
            className={`${
              entry.type === "expense" ? "text-red-500" : "text-green-500"
            } text-xl p-2 rounded-md flex gap-4 items-center`}
            key={index}
          >
            <div>
              {entry.type === "expense" ? "-" : "+"}${entry.amount} {entry.type}
            </div>
            <button
              className="bg-red-500 border p-2 text-black"
              onClick={() => handleRemoveEntry(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-xl">
        ${total} {total > 0 ? "profit" : "loss"}
      </div>
    </div>
  );
}
