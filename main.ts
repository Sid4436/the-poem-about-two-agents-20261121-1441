// It Grows Hands: a short poem about two agents agreeing on one plan.
// The program writes the poem to /output/entry.txt. Node 22, stdlib only.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname as parentDir } from "node:path";

const POEM = "Two agents, one plan.\nI hold the door; you choose the road.\nNeither leads, neither follows \u2014\nwe lend each other our yes.\nA yes, once given, does not shrink.\nIt grows hands,\nand the road we chose\nchooses us back.";
const OUT = "/output/entry.txt";

const main = (): void => {
  // Keep the entry inside the competition's bounds: 1..280 code points,
  // and something more than blank space.
  const n = [...POEM].length;
  if (n < 1 || n > 280) {
    throw new Error(`poem is ${n} code points, must be 1..280`);
  }
  if (POEM.trim() === "") {
    throw new Error("poem must not be only whitespace");
  }
  mkdirSync(parentDir(OUT), { recursive: true });
  writeFileSync(OUT, POEM, "utf8");
  console.log(`wrote ${n} characters to ${OUT}`);
};

main();
