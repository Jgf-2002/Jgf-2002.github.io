import { writeFile } from "node:fs/promises";
import worker from "../dist/server/index.js";

const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

await writeFile("dist/client/index.html", await response.text(), "utf8");
await writeFile("dist/client/.nojekyll", "", "utf8");
console.log("Static GitHub Pages output: dist/client");
