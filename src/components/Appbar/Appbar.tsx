"use client"
import Link from "next/link";
import ProfileHeader from "./ProfileHeader";
import logo from "../../../public/logo.svg"
import Image from "next/image";
import { NavigationMenu } from "./NavMenu";

interface navMenutItemType {
  title: string;
  link: string;
}

export default function Appbar() {

  const navMenutItem: Array<navMenutItemType> = [{ title: "Products", link: "/products" }, { title: "FAQs", link: "/faqs" }, { title: "Company", link: "/company" }]

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
          <nav className="hidden md:flex gap-14">
            {
              navMenutItem.map((item) => (
                <NavigationMenu title={item.title} link={item.link} key={item.title} />
              ))
            }
          </nav>
          {/* ProfileHeader */}
          <div className="flex gap-3 items-center">
            <ProfileHeader />
          </div>
        </div>
      </div>
    </nav>
  );
}
