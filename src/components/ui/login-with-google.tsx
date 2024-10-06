import React from 'react'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import ShimmerButton from './shimmer-button'

const GoogleLoginButton = () => {
  return (
    <ShimmerButton
      shimmerColor="#4285F4"
      shimmerDuration="2s"
      className="px-4 py-2 text-sm md:text-base mr-4"
      onClick={async () => await signIn('google', { callbackUrl: '/wallet' })}
    >
      <span className="flex items-center gap-2">
        Login
        <FaGoogle />
      </span>
    </ShimmerButton>
  )
}

export default GoogleLoginButton
