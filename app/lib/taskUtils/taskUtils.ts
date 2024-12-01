export const fetchTasks = async () => {
  return [
    { id: "1", title: "First Task", description: "This is the first task." },
    { id: "2", title: "Second Task", description: "This is the second task." },
  ]
}

export const validateTask: any = (task: {
  title: string
  description: string
}) => {
  return task.title.trim().length > 0
}
