"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserImage from "./UserImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

const dropDownData = [
  {
    name: "Profile",
    icon: <UserRound size={15} />,
    href: "/profile",
  },
];

export default function Appbar() {
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-zinc-800 border-b border-b-zinc-300">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <WalletIcon className="h-6 w-6 text-zinc-300" />
        <span className="sr-only">Crypto Wallet Generator</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[2rem] flex items-center p-[0.2rem]  justify-center h-[2rem]">
              {!user.image ? (
                <div className="p-1 border-2 rounded-md border-[#1a1a1a]">
                  <UserRound />
                </div>
              ) : (
                <UserImage image={user.image} />
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="!w-[15rem] dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg bg-zinc-800">
              <DropdownMenuLabel className="flex gap-4 items-center">
                <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center !h-[2rem]">
                  {!user.image ? (
                    <div className="p-1 border-2 rounded-full border-[#1a1a1a]">
                      <UserRound />
                    </div>
                  ) : (
                    <UserImage image={user.image} />
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="max-w-[200px]">{user?.name}</span>
                  <span className="text-[0.8rem] max-w-[200px] text-gray-400">
                    {user?.email}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {dropDownData.map((item, index) => {
                return (
                  <DropdownMenuItem
                    className="flex gap-2 focus:border-gray-500 cursor-pointer"
                    onClick={() => router.push("/profile")}
                    key={index}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
              {user && (
                <DropdownMenuItem
                  onClick={async () => {
                    await signOut();
                    router.push("/");
                  }}
                  className="flex gap-2 cursor-pointer"
                >
                  <LogOut size={15} />
                  Logout
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {!user && (
          <Button
            onClick={async () => await signIn("google")}
            variant="outline"
            className="inline-flex h-9 items-center justify-center rounded-md text-sm text-white font-medium shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <ChromeIcon className="h-4 w-4 mr-2" />
            Login with Google
          </Button>
        )}
      </nav>
    </header>
  );
}
function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function WalletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
