import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/tree")({
  component: RouteComponent,
});

type Node = {
  children: Node[];
  text: string;
  type: "file" | "folder";
};

function RouteComponent() {
  const [root, setRoot] = useState<Node>({
    children: [
      {
        children: [
          {
            children: [
              {
                children: [],
                text: "file1-1-1.txt",
                type: "file",
              },
              {
                children: [],
                text: "file1-1-2.txt",
                type: "file",
              },
            ],
            text: "folder1-1",
            type: "folder",
          },
          {
            children: [],
            text: "file1-2.txt",
            type: "file",
          },
        ],
        text: "folder1",
        type: "folder",
      },
      {
        children: [
          {
            children: [
              {
                children: [],
                text: "file2-1-1",
                type: "file",
              },
            ],
            text: "folder2-1",
            type: "folder",
          },
        ],
        text: "folder2",
        type: "folder",
      },
    ],
    text: "root",
    type: "folder",
  });

  return (
    <div className="p-8">
      <NodeComponent node={root} />
    </div>
  );
}

function NodeComponent({ node }: { node: Node }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {node.type === "folder" ? (
        <button
          className="text-blue-400 hover:text-blue-500 block mb-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {node.text} {isExpanded ? "-" : "+"}
        </button>
      ) : (
        <div>{node.text}</div>
      )}
      {isExpanded && (
        <div className="pl-4 space-y-2">
          {node.children.map((child) => (
            <NodeComponent node={child} />
          ))}
        </div>
      )}
    </>
  );
}
