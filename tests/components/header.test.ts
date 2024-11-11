import { test, expect } from "playwright/test"
/*
test("output coverage", async() => {
  await coverage.startJSCoverage();
await coverage.startJSCoverage(options);
})
*/
test("sample: should return correct addition result", async () => {
  function add(a: number, b: number) {
    return a + b
  }
  const result = add(2, 3)
  expect(result).toBe(5) // Expect result to be 5
})
