import React from "react"
import { Image } from "./Image"

interface HeaderProps {
  imageWidth?: string
}

const Header: React.FC<HeaderProps> = ({ imageWidth = "w-60" }) => {
  return (
    <div className="header">
      {/* Logo */}
      <Image imageSrc="marvelshelflogo.webp" className={imageWidth} />
    </div>
  )
}

export default Header
