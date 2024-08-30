'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import LoginWithGoogleButton from '../ui/login-with-google'

const ProfileHeader = () => {
  const [isUSer, setIsUser] = useState(false)
  const { data } = useSession()

  //added data?.user in dependency array to avoid lint warnings
  useEffect(() => {
    if (data?.user) setIsUser(true)
  }, [data?.user])
  return (
    <div className="flex items-center gap-4">
      {isUSer ? (
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
