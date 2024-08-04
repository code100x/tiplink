'use client';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import LoginWithGoogleButton from '../ui/login-with-google';

const ProfileHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? (
        <Button size="sm" variant="outline" onClick={() => signOut()}>
          Sign out
        </Button>
      ) : (
        <LoginWithGoogleButton />
      )}
    </div>
  );
};

export default ProfileHeader;
