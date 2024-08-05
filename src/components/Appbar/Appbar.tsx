"use client"
import Link from "next/link";
import ProfileHeader from "./ProfileHeader";
import logo from "../../../public/logo.svg"
import Image from "next/image";
import { NavigationMenu } from "./NavMenu";
import { useState } from "react";

interface navMenutItemType {
  title: string;
  link: string;
}

export default function Appbar() {

  const navMenutItem: Array<navMenutItemType> = [{ title: "Products", link: "/products" }, { title: "FAQs", link: "/faqs" }, { title: "Company", link: "/company" }]
  const [ nav, setNav ] = useState(true);

  return (
    <nav className="inset-x-0 top-0 backdrop-blur-2xl z-50 border-y-2">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          {/* LeftNav */}
          <Link className="flex items-center text-xl font-bold text-[#006399]" href={"/"}>
            <Image src={logo} alt="@logo" className="hover:-rotate-180 duration-700" />
            SolLink
          </Link>
          {/* NavMenu */}
          { nav && <nav className="hidden md:flex gap-14">
            {
              navMenutItem.map((item) => (
                <NavigationMenu title={item.title} link={item.link} />
              ))
            }
          </nav> }
          {/* ProfileHeader */}
          <div className="flex gap-3 items-center">
            <Link href = 'pages/wallet'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </button>
            </Link>
            <ProfileHeader />
          </div>
        </div>
      </div>
    </nav>
  );
}
