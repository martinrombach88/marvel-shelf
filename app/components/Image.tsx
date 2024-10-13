interface ImageProps {
  className?: string;
  imageSrc: string;
}

export const Image: React.FC<ImageProps> = ({ className="", imageSrc }) => {
  return (
    <img className={className} src={imageSrc}></img>

  )
}
