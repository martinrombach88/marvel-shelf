import Link from "next/link"

interface SiteLinkProps {
  url: string
  className?: string
  buttonText: string
  format?: string
  testId: string
}

const SiteLink: React.FC<SiteLinkProps> = ({
  className = "",
  buttonText,
  format = "hover",
  url = "",
  testId,
}) => {
  return (
    <Link
      data-testId={testId}
      href={url}
      className={
        "relative inline-flex items-center justify-center my-4 p-2 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
      }
    >
      <span className="absolute inset-0 flex items-center justify-evenly w-full h-full black duration-300 -translate-x-full bg-red-200 group-hover:translate-x-0 ease">
        {buttonText}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
        {buttonText}
      </span>
      <span className="relative invisible">Button Text</span>
    </Link>
  )
}

export default SiteLink
