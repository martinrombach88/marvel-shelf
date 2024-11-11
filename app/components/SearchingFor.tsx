import React from "react"

interface SearchingForProps {
  content?: string
}

const SearchingFor = ({ content }: SearchingForProps): JSX.Element => {
  const dynamicText: string = content ? content : "..."
  return <h1>Searching for {dynamicText}</h1>
}

export default SearchingFor
