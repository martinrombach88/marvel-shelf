import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gray-100 p-6">{children}</div>
)

export default Layout
