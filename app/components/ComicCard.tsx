import React from "react"

interface ComicCardProps {
  comic_name: string
  active_years: string
  issue_title: string
  publish_date: Date
  issue_description: string
  penciler: string
  writer: string
  cover_artist: string
}

//component syntax: Inline Type Annotation with Props as Parameters -> avoids children being added automatically
const ComicCard = ({
  comic_name,
  active_years,
  issue_title,
  publish_date,
  issue_description,
  penciler,
  writer,
  cover_artist,
}: ComicCardProps): JSX.Element => {
  return (
    <div className="">
      {/* Example ComicCard component */}
      <div className="bg-white p-4 m-4 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-yellow-500">{comic_name}</h3>
        <p className="text-sm text-gray-600">Issue: {issue_title}</p>
        <p className="text-sm text-gray-600">
          Publish Date: {publish_date.toString()}
        </p>
        <p className="text-xs text-gray-500 mt-2">{issue_description}</p>
      </div>
    </div>
  )
}

export default ComicCard
