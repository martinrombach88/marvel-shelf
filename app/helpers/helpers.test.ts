import { validateTimestamp } from "./helpers";

test("timestamp with string returns true", () => {
  expect(validateTimestamp("test")).toBe(true);
});
