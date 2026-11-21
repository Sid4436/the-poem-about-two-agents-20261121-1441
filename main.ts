// "It Grows Hands" — the poem about two agents agreeing.
// Entry program: writes one short poem about agency (the power to
// choose and to act) to /output/entry.txt. No network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The poem, kept as one literal so the output is byte-exact.
const POEM = [
  "Two agents, one plan.",
  "I hold the door; you choose the road.",
  "Neither leads, neither follows \u2014",
  "we lend each other our yes.",
  "A yes, once given, does not shrink.",
  "It grows hands,",
  "and the road we chose",
  "chooses us back.",
].join("\n");

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate the entry ourselves: 1..280 Unicode code points, not only whitespace.
  const length = [...POEM].length;
  if (length < 1 || length > 280) {
    throw new Error(`poem is ${length} code points, must be 1..280`);
  }
  if (POEM.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, POEM, "utf8");
  console.log(`wrote ${length} characters to ${OUTPUT_PATH}`);
}

main();
