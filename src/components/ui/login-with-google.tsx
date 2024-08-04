'use client'
import { FaGoogle } from 'react-icons/fa6'
import { Button } from './button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const LoginWithGoogleButton = () => {
  return (
    <Link href="/signup">
      <Button onClick={async () => await signIn('google')}>
        <span className="flex items-center gap-2">
          <FaGoogle />
          Login
        </span>
      </Button>
    </Link>
  )
}

export default LoginWithGoogleButton