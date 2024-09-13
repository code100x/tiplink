'use client'
import { signIn, SignInResponse } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SignIn() {
  const [loading, setLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      const result = await signIn('google', {
        callbackUrl: '/',
        redirect: false,
      })
      handleSignInResult(result)
    } catch (error) {
      console.error('Sign in error:', error)
    }
    setLoading(false)
  }

  const handleSignInResult = (result: SignInResponse | undefined) => {
    if (result?.error) {
      console.error(result.error)
    } else if (result?.url) {
      window.location.href = result.url
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md mx-auto bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Sign Up / Sign In
          </CardTitle>
          <CardDescription className="text-gray-300">
            Click on Google Sign in as we only support Google Sign-In for now
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-white text-black hover:bg-gray-200"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
            </svg>
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-400">
            By signing up, you agree to our{' '}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
