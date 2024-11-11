"use client"

import React from "react"
import { useState } from "react"

interface ToggleTextProps {
  toggleTitle: string
}

const ToggleText = ({ toggleTitle }: ToggleTextProps): JSX.Element => {
  const [isOn, setIsOn] = useState(false)
  const setText = () => {
    setIsOn(!isOn)
    console.log("toggle")
  }

  return (
    <button
      onClick={setText}
      className={`m-1 toggle rounded-md p-2 ${isOn ? "toggleOn" : "toggleOff"}`}
    >
      <h3>{toggleTitle}</h3>
    </button>
  )
}

export default ToggleText
