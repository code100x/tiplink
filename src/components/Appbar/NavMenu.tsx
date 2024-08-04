'use client';
import Link from 'next/link';

type NavigationMenuProps = {
    title: string;
    link: string;
};
export const NavigationMenu = ({ title, link }: NavigationMenuProps) => {
    return (
        <Link className="flex items-center font-medium" href={link}>
            {title}
        </Link>
    );
};
