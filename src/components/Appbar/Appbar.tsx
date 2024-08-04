'use client';
import Link from 'next/link';
import ProfileHeader from './ProfileHeader';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import { NavigationMenu } from './NavMenu';

interface navMenutItemType {
    title: string;
    link: string;
}

export default function Appbar() {
    const navMenutItem: Array<navMenutItemType> = [
        { title: 'Products', link: '/products' },
        { title: 'FAQs', link: '/faqs' },
        { title: 'Company', link: '/company' },
    ];

    return (
        <nav className="inset-x-0 top-0 z-50 border-y-2 backdrop-blur-2xl">
            <div className="mx-auto w-full max-w-7xl px-4">
                <div className="flex h-14 items-center justify-between">
                    {/* LeftNav */}
                    <Link
                        className="flex items-center text-xl font-bold text-[#006399]"
                        href={'/'}
                    >
                        <Image
                            src={logo}
                            alt="@logo"
                            className="duration-700 hover:-rotate-180"
                        />
                        SolLink
                    </Link>
                    {/* NavMenu */}
                    <nav className="hidden gap-14 md:flex">
                        {navMenutItem.map((item) => (
                            <NavigationMenu
                                title={item.title}
                                link={item.link}
                            />
                        ))}
                    </nav>
                    {/* ProfileHeader */}
                    <div className="flex items-center gap-3">
                        <ProfileHeader />
                    </div>
                </div>
            </div>
        </nav>
    );
}
