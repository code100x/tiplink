'use client'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import LoginWithGoogleButton from '../ui/login-with-google'

const ProfileHeader = () => {
  const { data } = useSession()

  return (
    <div className="flex items-center gap-4">
      {data?.user ? (
        <Button size="sm" variant="outline">
          Sign out
        </Button>
      ) : (
        <LoginWithGoogleButton />
      )}
    </div>
  )
}

export default ProfileHeader
