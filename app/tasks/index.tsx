import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import TaskCard from "../components/TaskCard"
import { fetchTasks } from "../lib/taskUtils"

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const loadTasks = async () => {
      const data: any = await fetchTasks()
      setTasks(data)
    }
    loadTasks()
  }, [])

  return (
    <Layout>
      <h1 className="text-xl font-semibold">Tasks</h1>
      <div className="space-y-4">
        {tasks.map((task: any) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </Layout>
  )
}

export default Tasks
