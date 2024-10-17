import React, { useState } from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = ['Products', 'API & Docs', 'FAQ', 'Company', 'Blogs']

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenuTrigger className="focus:outline-none">
          <span className='flex items-center gap-2'>
            Browse
            <BsChevronDown
              className={`dark:text-white transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </span> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2 bg-white dark:bg-black border border-gray-200 dark:border-white rounded-md shadow-lg">
          {navItems.map((item) => (
            <DropdownMenuItem key={item} asChild>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default NavbarMobile
