import Layout from "../components/Layout"

const CreateTask = () => {
  const handleCreate = async (event: React.FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
        description: formData.get("description"),
      }),
      headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
      alert("Task created!")
      form.reset()
    }
  }

  return (
    <Layout>
      <h1>Create Task</h1>
      <form onSubmit={handleCreate}>
        <input type="text" name="title" placeholder="Task Title" required />
        <textarea name="description" placeholder="Task Description"></textarea>
        <button type="submit">Create Task</button>
      </form>
    </Layout>
  )
}

export default CreateTask
