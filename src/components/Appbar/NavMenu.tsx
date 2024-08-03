"use client"
import Link from "next/link";

type NavigationMenuProps = {
    title: string;
    link: string;
}
export const NavigationMenu = ({title, link}:NavigationMenuProps) => {
  return (
    <Link
    className="font-medium flex items-center"
    href={link}
  >
    {title}
  </Link>
  )
}
