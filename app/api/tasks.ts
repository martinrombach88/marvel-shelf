import { NextApiRequest, NextApiResponse } from "next"

const tasks = [
  { id: "1", title: "First Task", description: "This is the first task." },
  { id: "2", title: "Second Task", description: "This is the second task." },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(tasks)
  } else if (req.method === "POST") {
    const newTask = JSON.parse(req.body)
    tasks.push({ id: `${tasks.length + 1}`, ...newTask })
    res.status(201).json(newTask)
  } else {
    res.status(405).end()
  }
}
