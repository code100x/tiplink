import { auth } from "@/lib/auth";
import Link from "next/link";
import LoginWithGoogleButton from "../ui/login-with-google";

export async function Demo() {
	const session = await auth();

	if (!session) {
		return <LoginWithGoogleButton />;
	}
	return (
		<div>
			<Link
				href="/dashboard"
				className="inline-flex p-2 items-center bg-[#006399] hover:bg-[#185273] text-white justify-center rounded-md text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			>
				Go to Dashboard
			</Link>
		</div>
	);
}
