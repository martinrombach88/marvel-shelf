import { validateTask } from "./taskUtils"

test("validates task with title", () => {
  expect(validateTask({ title: "Task", description: "" })).toBe(true)
})

test("invalidates task without title", () => {
  expect(validateTask({ title: "", description: "" })).toBe(false)
})
