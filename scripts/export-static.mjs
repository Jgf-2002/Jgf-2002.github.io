import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import worker from "../dist/server/index.js";

const routes = [
  { pathname: "/", output: "dist/client/index.html" },
  { pathname: "/internship", output: "dist/client/internship/index.html" },
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route.pathname} with HTTP ${response.status}`);
  }

  await mkdir(dirname(route.output), { recursive: true });
  await writeFile(route.output, await response.text(), "utf8");
}

await writeFile("dist/client/.nojekyll", "", "utf8");
console.log(`Static GitHub Pages output: ${routes.map((route) => route.pathname).join(", ")}`);
