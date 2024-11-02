import { Button } from "./components/Button"
import { Image } from "./components/Image"
import { Input } from "./components/Input"
import LoginStatus from "./components/LoginStatus"
import getComics from "@/data-lib/json-lib"
import React from "react"
import ComicCard from "./components/ComicCard"

export default async function Home() {
  const comics = await getComics()
  return (
    <>
      <div className="min-h-screen">
        <Image imageSrc="marvelshelflogo.webp" className="w-80" />
        {/* Container for two-column layout */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column: Search Component */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            {/* <h2 className="text-xl font-bold text-gray-700 mb-4">
              Search Comics
            </h2> */}

            {/* Logo */}

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by title or year"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
            <Button buttonText="Search" />
            {/* Additional filters or options can go here 
            <div className="mt-4 space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Filter by Genre
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"></select>
            </div>
          */}

            {/* Right Column: Comic Cards */}
          </div>

          <div className="col-span-1 lg:col-span-3 space-y-6">
            {/* Loop to display multiple ComicCard components */}
            {/* 
            {comics.map((comic, index) => (
              <ComicCard {...comic} key={index} />
            ))}*/}
            {/* Add more ComicCard components as needed */}
          </div>
        </div>
      </div>
    </>
  )
}
