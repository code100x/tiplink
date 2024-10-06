// components/WaveBackground.tsx
import React from 'react'

const WaveBackground: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg
          className="relative block w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.1)" // Light color for the wave
            d="M0,160L80,154.7C160,149,320,139,480,138.7C640,139,800,149,960,176C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="rgba(255, 255, 255, 0.2)" // Darker shade for a shadow effect
            d="M0,192L80,192C160,192,320,192,480,186.7C640,181,800,171,960,165.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default WaveBackground
