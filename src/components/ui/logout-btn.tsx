"use client"

import { signOut } from "next-auth/react"
import { Button } from "./button"

const LogOutButton = () => {
	return (
		<Button
			onClick={() => signOut()}
			className="inline-flex h-9 items-center bg-[#006399] hover:bg-[#185273] text-white justify-center rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
		>
			Sign out
		</Button>
	);
};

export default LogOutButton
