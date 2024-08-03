'use client'
import { Button } from './button'
import { GoogleIcon } from './googleicon'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const LoginWithGoogleButton = () => {
  return (
    <Link href="/signup">
          <Button onClick={async () => await signIn('google')}
            className="inline-flex h-9 items-center bg-[#006399] hover:bg-[#185273] text-white justify-center rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <GoogleIcon />
            Login with Google
          </Button>
    </Link>
  )
}

export default LoginWithGoogleButton