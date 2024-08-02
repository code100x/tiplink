"use client"
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { GoogleIcon } from '../ui/googleicon';

const ProfileHeader = () => {
  const [isUSer, setIsUser] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    if (data?.user) setIsUser(true);
  }, [])
  return (
    <div className="flex items-center gap-4">
      {isUSer ? (
        <Button
          size="sm"
          variant="outline"
        >
          Sign out
        </Button>
      ) : (
        <Link href="/signup" className="hidden md:block">
          <Button onClick={async () => await signIn('google')}
            className="inline-flex h-9 items-center bg-[#006399] hover:bg-[#185273] text-white justify-center rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <GoogleIcon />
            Login with Google
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProfileHeader;