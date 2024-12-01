import { validateEntity } from "./crudUtils"

test("validates entity with custom logic", () => {
  const task = { id: "1", title: "Test Task", description: "" }
  const isValid = validateEntity(task, (t: any) => t.title.length > 0)
  expect(isValid).toBe(true)
})

test("invalidates entity with custom logic", () => {
  const task = { id: "1", title: "", description: "" }
  const isValid = validateEntity(task, (t: any) => t.title.length > 0)
  expect(isValid).toBe(false)
})
