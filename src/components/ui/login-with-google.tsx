'use client'
import { FaGoogle } from 'react-icons/fa6'
import { Button } from './button'
import { signIn } from 'next-auth/react'

const LoginWithGoogleButton = () => {
  return (
    <Button
      onClick={async () => await signIn('google', { callbackUrl: '/wallet' })}
    >
      <span className="flex items-center gap-2">
        Login
        <FaGoogle />
      </span>
    </Button>
  )
}

export default LoginWithGoogleButton
