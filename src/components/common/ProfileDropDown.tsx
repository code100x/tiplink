import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserImage from '@/components/Appbar/UserImage'
import { LogOut, UserRound } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const ProfileDropDown = () => {
  const { data } = useSession()
  const router = useRouter()

  const dropDownData = [
    {
      name: 'Profile',
      icon: <UserRound size={15} />,
      href: '/profile',
    },
  ]

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem]  justify-center h-[2rem] transition outline-none">
          {!data?.user?.image ? (
            <div className="p-1 border-2 rounded-md">
              <UserRound />
            </div>
          ) : (
            <UserImage image={data?.user.image} />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="translate-y-8 scale-110 -translate-x-10 shadow-lg bg-white ">
          <DropdownMenuLabel className="flex gap-4 items-center">
            <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center !h-[2rem]">
              {!data?.user?.image ? (
                <div className="p-1 border-2 rounded-full border-[#1a1a1a]">
                  <UserRound />
                </div>
              ) : (
                <UserImage image={data?.user.image} />
              )}
            </div>

            <div className="flex flex-col">
              <span className="max-w-[200px]">{data?.user?.name}</span>
              <span className="text-[0.8rem] max-w-[200px] text-gray-400 break-all">
                {data?.user?.email}
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {dropDownData.map((item, index) => {
            return (
              <DropdownMenuItem
                className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
                onClick={() => router.push('/profile')}
                key={index}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </DropdownMenuItem>
            )
          })}
          <DropdownMenuSeparator />
          {data?.user && (
            <DropdownMenuItem
              onClick={async () => {
                await signOut()
                router.push('/')
              }}
              className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
            >
              <LogOut size={15} />
              Logout
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ProfileDropDown
