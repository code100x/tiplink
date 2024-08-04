'use client';
import { Button } from './button';
import { GoogleIcon } from './googleicon';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const LoginWithGoogleButton = () => {
    return (
        <Link href="/signup">
            <Button
                onClick={async () => await signIn('google')}
                className="focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md bg-[#006399] text-sm font-medium text-white shadow transition-colors hover:bg-[#185273] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            >
                <GoogleIcon />
                Login with Google
            </Button>
        </Link>
    );
};

export default LoginWithGoogleButton;
