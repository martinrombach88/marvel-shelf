import React from "react"
import { Button } from "./Button"
import ToggleText from "./ToggleText"

export default function Search() {
  return (
    <div className="search place-content-center">
      <div className="">
        <ToggleText toggleTitle="Issue Title" />
        <ToggleText toggleTitle="Writer" />
        <ToggleText toggleTitle="Penciler" />
        <ToggleText toggleTitle="You Get It" />
      </div>

      <input
        type="text"
        placeholder="Enter your search term"
        className="p-2 m-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
      />

      <Button buttonText="Search" />
    </div>
  )
}
