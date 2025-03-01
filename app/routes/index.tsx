import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const examples = [
    { path: "/calculator", title: "Calculator" },
    { path: "/connect-four", title: "Connect Four" },
    { path: "/dice", title: "Dice" },
    { path: "/expense", title: "Expense Tracker" },
    { path: "/gradient", title: "Gradient" },
    { path: "/hangman", title: "Hangman" },
    { path: "/hanoi", title: "Tower of Hanoi" },
    { path: "/histogram", title: "Histogram" },
    { path: "/memory", title: "Memory Game" },
    { path: "/quiz", title: "Quiz" },
    { path: "/quote", title: "Quote Generator" },
    { path: "/rock-paper-scissors", title: "Rock Paper Scissors" },
    { path: "/simon", title: "Simon Says" },
    { path: "/speed", title: "Speed Test" },
    { path: "/split", title: "Split View" },
    { path: "/stopwatch", title: "Stopwatch" },
    { path: "/tic-tac-toe", title: "Tic Tac Toe" },
    { path: "/traffic-light", title: "Traffic Light" },
    { path: "/tree", title: "Tree Visualization" },
    { path: "/whack-a-mole", title: "Whack-a-Mole" },
    { path: "/password", title: "Password Generator" },
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Interactive Examples
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {examples.map((example) => (
          <Link
            key={example.path}
            to={example.path}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {example.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
