import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/quote")({
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
  return fetch("https://api.gameofthronesquotes.xyz/v1/random").then(
    (response) => response.json() as Promise<Quote>
  );
}

function RouteComponent() {
  const {
    data: quote,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["quote"],
    queryFn: () => getQuote(),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-gray-400 rounded-lg p-12 flex flex-col gap-4 items-center">
        {isFetching ? <p>Loading...</p> : <p>"{quote?.sentence}"</p>}
        <button
          onClick={() => refetch()}
          className="hover:bg-gray-800 bg-gray-700 text-white rounded p-4"
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}
