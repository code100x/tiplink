'use client'

import { cn } from '@/lib/utils'
import {
  ArrowDownUp,
  Keyboard,
  Link,
  Settings,
  Wallet,
  WalletCards,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

const PrimaryOptions = [
  {
    svg: <Wallet size={22} />,
    title: 'Wallet',
    href: '/wallet',
  },
  {
    svg: <ArrowDownUp size={22} />,
    title: 'Swap',
    href: '',
  },
  {
    svg: <WalletCards size={22} />,
    title: 'Wallet Adapter',
    href: '',
  },
  {
    svg: <Link size={22} />,
    title: 'API',
    href: '',
  },
  {
    svg: (
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
    title: 'Pro Version',
    href: '',
  },
]
const SecondaryOption = [
  {
    svg: <Keyboard size={22} />,
    title: 'KeyBoard Shortcuts',
    href: '',
  },
  {
    svg: <Settings size={22} />,
    title: 'Setting',
    href: '',
  },
]

const LeftSideBar = () => {
  const pathName = usePathname()

  return (
    <div className="flex flex-col items-center justify-between w-full space-y-2 text-bold h-full py-5">
      <div className="w-full flex flex-col items-center gap-3 px-4">
        {PrimaryOptions.map((option, index) => (
          <button
            key={index}
            className={cn(
              'flex items-center gap-2 w-full space-x-3 sm:p-3 hover:bg-black hover:text-white rounded-lg dark:text-white',
              pathName === option?.href
                ? 'sm:bg-black text-white'
                : 'text-black',
            )}
          >
            {option.svg}
            <p className="font-medium">{option.title}</p>
          </button>
        ))}
      </div>

      <div className="w-full border-t px-4 flex flex-col items-center gap-3 pt-5">
        {SecondaryOption.map((option, index) => (
          <button
            key={index}
            className={cn(
              'flex items-center gap-2 w-full space-x-3 sm:p-3 hover:bg-black dark:text-white hover:text-white text-nowrap rounded-lg',
              pathName === option?.href ? 'bg-black text-white' : 'text-black',
            )}
          >
            {option.svg}
            <p className="font-medium text-start">{option.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LeftSideBar
