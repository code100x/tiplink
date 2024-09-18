'use client'

import React from 'react'
import Input from '../ui/input'
import { SearchIcon } from 'lucide-react'

export default function SearchForm() {
  return (
    <div className="hidden sm:block w-60 md:w-96 xl:max-w-lg bg-black dark:bg-white/20 text-slate-200 rounded-full focus-within:shadow-md">
      <div className="flex items-center">
        <input
          name="q"
          placeholder="Search"
          className="w-full px-4 py-2 bg-transparent outline-none rounded"
        />
        <button className="px-4 py-2 bg-transparent outline-none border-none">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}
