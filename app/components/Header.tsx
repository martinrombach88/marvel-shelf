import React from "react";
import { Image } from "./Image";
import SiteLink from "./SiteLink";

interface HeaderProps {
  imageWidth?: string;
  goBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  imageWidth = "w-60",
  goBackButton = false,
}) => {
  return (
    <div className="header">
      {/* Logo */}
      {goBackButton && <SiteLink buttonText="Go Back" url={"/"} />}
      <Image imageSrc="marvelshelflogo.webp" className={imageWidth} />
    </div>
  );
};

export default Header;
