import { fetchItems, validateEntity } from "./crudUtils"

interface Task {
  id: string
  title: string
  description: string
}

export const fetchTasks = async (): Promise<Task[]> => {
  return fetchItems<Task>("/api/tasks")
}

export const validateTask = (task: Task): boolean => {
  return validateEntity(task, (t) => t.title.trim().length > 0)
}
