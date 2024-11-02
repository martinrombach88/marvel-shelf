import { Button } from "./components/Button"
import { Image } from "./components/Image"
import { Input } from "./components/Input"
import LoginStatus from "./components/LoginStatus"
import getComics from "@/data-lib/json-lib"
import React from "react"
import ComicCard from "./components/ComicCard"

export default async function Home() {
  const comics = await getComics()
  const column2: boolean = true

  return (
    <>
      <div className="header">
        {/* Logo */}
        <Image imageSrc="marvelshelflogo.webp" className="w-60" />
      </div>

      {/* Container for two-column layout */}
      <div className="columns">
        {/* Left Column: Search Component */}
        <div className="column1">
          {/* Search Input */}
          <div className="search">
            <input
              type="text"
              placeholder="Search by title or year"
              className="p-2 m-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
            <Button buttonText="Search" />
          </div>
        </div>
        {column2 && (
          <div className="column2">
            {/* Right Column: Comic Cards */}
            {/* Loop to display multiple ComicCard components */}
            {comics.map((comic, index) => (
              <ComicCard {...comic} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
