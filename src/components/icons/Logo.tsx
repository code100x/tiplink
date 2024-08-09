import React from 'react'
import Link from 'next/link'
interface LogoProps {
  className?: string
  fill?: string
}

const Logo: React.FC<LogoProps> = ({ className, fill }) => (
  <Link href='/'>
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236914/logo_h2ozng.svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z"
        fill={fill} // Set fill color to black
      />
    </svg>
  </Link>
)

export default Logo
