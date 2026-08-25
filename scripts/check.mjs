import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

assert.match(html, /^<!doctype html>/i, "index.html must declare HTML5");
assert.match(html, /<title>StackRunway/, "document title is missing");
assert.match(html, /id="startDate"/, "runway start control is missing");
assert.match(html, /data-days="30"/, "30-day runway option is missing");
assert.match(html, /data-days="60"/, "60-day runway option is missing");
assert.match(html, /data-days="90"/, "90-day runway option is missing");
assert.match(html, /Export JSON/, "JSON export control is missing");
assert.match(html, /Restore JSON/, "JSON restore control is missing");
assert.doesNotMatch(html, /<script[^>]+src=/i, "runtime script dependencies are not permitted");
assert.doesNotMatch(html, /<link[^>]+rel=["']stylesheet/i, "runtime stylesheet dependencies are not permitted");
assert.doesNotMatch(html, /\b(fetch|XMLHttpRequest|WebSocket)\s*\(/, "network calls are not permitted");

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
assert.equal(scripts.length, 1, "exactly one inline application script is expected");
new vm.Script(scripts[0][1], { filename: "index.html:inline-script" });

console.log("StackRunway checks passed: structure, privacy boundaries and JavaScript syntax.");
