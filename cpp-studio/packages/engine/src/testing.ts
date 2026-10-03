/** Summary of a test executable run (studio_test.hpp or GoogleTest style output). */
export interface TestSummary {
  total: number;
  passed: number;
  failed: number;
  failures: { name: string; details: string }[];
  passedNames: string[];
}

/**
 * Parse GoogleTest-compatible output. `studio_test.hpp` (shipped with the curriculum)
 * deliberately uses the same `[ RUN ] / [ OK ] / [ FAILED ]` markers so learners
 * move to GoogleTest later without re-learning how to read results.
 */
export function parseTestOutput(output: string): TestSummary {
  const lines = output.split(/\r?\n/);
  const failures: { name: string; details: string }[] = [];
  const passedNames: string[] = [];
  let current: { name: string; buf: string[] } | undefined;
  for (const line of lines) {
    let m = /^\[ RUN\s+\]\s+(.+?)\s*$/.exec(line);
    if (m) { current = { name: m[1], buf: [] }; continue; }
    m = /^\[\s+OK\s+\]\s+(.+?)(\s+\(\d+ ms\))?\s*$/.exec(line);
    if (m) { passedNames.push(m[1]); current = undefined; continue; }
    m = /^\[\s+FAILED\s+\]\s+(.+?)(\s+\(\d+ ms\))?\s*$/.exec(line);
    if (m) {
      // GoogleTest repeats failed names in a summary block after the run; only count the first.
      if (current && current.name === m[1]) {
        failures.push({ name: m[1], details: current.buf.join('\n').trim() });
      }
      current = undefined;
      continue;
    }
    if (current) current.buf.push(line);
  }
  const passed = passedNames.length;
  return { total: passed + failures.length, passed, failed: failures.length, failures, passedNames };
}
