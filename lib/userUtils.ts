export const fetchUsers = async () => {
  return [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
  ]
}

export const validateUserName = (name: string) => {
  return name.trim().length > 0
}
