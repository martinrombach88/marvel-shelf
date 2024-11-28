import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

/* if you want to change the fonts, important them or add to globals.css */

export const metadata: Metadata = {
  title: "Task List JS Testing",
  description: "Search",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
