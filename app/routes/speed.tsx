import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/speed")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/speed"!</div>;
}
