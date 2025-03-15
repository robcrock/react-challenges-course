import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/quote-rob")({
  component: RouteComponent,
});

type Quote = {
  sentence: string;
  character: {
    name: string;
    slug: string;
    house: {
      name: string;
      slug: string;
    };
  };
};

function getQuote() {
  return fetch("https://api.gameofthronesquotes.xyz/v1/random")
    .then((response) => response.json() as Promise<Quote>)
    .then((quote: Quote) => quote.sentence);
}

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    setIsLoading(true);
    const quote = await getQuote();
    setQuote(quote);
    setIsLoading(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 border border-gray-300 p-4 rounded-lg flex flex-col items-center">
        <div className="min-h-20">
          <p className="text-center">
            {isLoading ? "Loading..." : <>{quote}</>}
          </p>
        </div>
        <button
          className="h-10 bg-slate-800 border border-slate-700 px-4 rounded-lg text-white mt-4"
          onClick={getRandomQuote}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
}
