const TaskCard = ({
  task,
}: {
  task: { id: string; title: string; description: string }
}) => (
  <div className="border p-4 rounded">
    <h3 className="font-bold">{task.title}</h3>
    <p>{task.description}</p>
  </div>
)

export default TaskCard
