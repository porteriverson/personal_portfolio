import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Elephrend",
  description:
    "Elephrend Privacy Policy — what information the app collects, how it is used, and your choices.",
};

type MarkdownBlock =
  | { type: "heading"; level: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] };

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        content: heading[2],
      });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3})\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("- ")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", content: paragraph.join(" ") });
  }

  return blocks;
}

function renderInline(content: string): ReactNode[] {
  const tokens = content.split(/(\*\*[^*]+\*\*|https?:\/\/\S+)/g);

  return tokens.filter(Boolean).map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }

    if (token.startsWith("http")) {
      return (
        <a
          className="text-indigo-300 underline decoration-indigo-300/50 underline-offset-2 transition hover:text-indigo-200"
          href={token}
          key={index}
          rel="noreferrer"
          target="_blank"
        >
          {token}
        </a>
      );
    }

    return token;
  });
}

function MarkdownContent({ markdown }: { markdown: string }) {
  return parseMarkdown(markdown).map((block, index) => {
    if (block.type === "heading") {
      if (block.level === 1) {
        return (
          <h1 className="mb-2 text-4xl font-bold text-white" key={index}>
            {renderInline(block.content)}
          </h1>
        );
      }

      if (block.level === 2) {
        return (
          <h2 className="mb-3 mt-8 text-xl font-bold text-white" key={index}>
            {renderInline(block.content)}
          </h2>
        );
      }

      return (
        <h3 className="mb-2 mt-5 text-base font-semibold text-white" key={index}>
          {renderInline(block.content)}
        </h3>
      );
    }

    if (block.type === "list") {
      return (
        <ul
          className="mb-5 list-disc space-y-2 pl-6 text-[15px] leading-[23px] text-gray-300 marker:text-indigo-300"
          key={index}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }

    const isLastUpdated = block.content.startsWith("**Last Updated:");

    return (
      <p
        className={
          isLastUpdated
            ? "mb-7 text-sm italic text-gray-400"
            : "mb-4 text-[15px] leading-[23px] text-gray-300"
        }
        key={index}
      >
        {renderInline(block.content)}
      </p>
    );
  });
}

export default async function PrivacyPolicyPage() {
  const markdown = await readFile(
    path.join(process.cwd(), "privacy-policy.md"),
    "utf8",
  );

  return (
    <main className="min-h-screen bg-black pt-10">
      <article className="mx-auto max-w-4xl px-5 py-10 pb-16 sm:px-8">
        <MarkdownContent markdown={markdown} />
      </article>
    </main>
  );
}
