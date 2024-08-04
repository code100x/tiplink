import { auth } from "@/lib/auth";
import Image from "next/image";
import LoginWithGoogleButton from "../ui/login-with-google";
import LogOutButton from "../ui/logout-btn";

export async function Profile() {
	const session = await auth();

	if (!session) {
		return <LoginWithGoogleButton />;
	}

	return (
		<div>
			<div className="flex justify-center items-center gap-5">
				<Image
					src={session.user?.image || ""}
					alt="profile"
					className="w-10 h-10 rounded-full"
					width={40}
					height={40}
				/>
				<LogOutButton />
			</div>
		</div>
	);
}
