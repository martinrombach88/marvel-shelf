import { useEffect } from "react"
import Layout from "../components/Layout"
import TaskCard from "../components/TaskCard"
import { useAppSelector } from "../hooks/useAppSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { fetchTasks } from "../lib/taskUtils"
import { setTasks } from "../store/taskSlice"

const Tasks = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state: any) => state.tasks.tasks)

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks()
      dispatch(setTasks(data))
    }
    loadTasks()
  }, [dispatch])

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
