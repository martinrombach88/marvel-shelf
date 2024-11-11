import React from "react"

interface ComicCardProps {
  comic_name: string
  issue_title: string
  issue_description: string
  penciler?: string
  writer?: string
}

//component syntax: Inline Type Annotation with Props as Parameters -> avoids children being added automatically
const ComicCard = ({
  comic_name,
  issue_title,
  issue_description,
  penciler,
  writer,
}: ComicCardProps): JSX.Element => {
  return (
    <div className="snap-center">
      <div className="bg-white p-4 m-4 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-yellow-500">{issue_title}</h3>
        <p className="text-sm text-gray-600 font-bold">{comic_name}</p>
        {penciler != "None" && (
          <p className="text-sm text-gray-600">Penciler: {penciler}</p>
        )}
        {writer != "None" && (
          <p className="text-sm text-gray-600">Writer: {writer}</p>
        )}
        <p className="text-xs text-gray-500 mt-2">{issue_description}</p>
      </div>
    </div>
  )
}

export default ComicCard
