'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { MdWbSunny, MdNightsStay } from 'react-icons/md'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <button type='button' onClick={toggleTheme}>
        {theme === 'dark' ? (
          <MdWbSunny className="w-6 h-6" />
        ) : (
          <MdNightsStay className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
