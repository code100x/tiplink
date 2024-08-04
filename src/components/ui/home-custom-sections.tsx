import Image from 'next/image';
import React from 'react';
import LoginWithGoogleButton from './login-with-google';
import { CustomSectionsProps } from '@/lib/definitions';

const CustomSections = ({
    title,
    description,
    iconSvg,
    iconTitle,
    image,
    bgBlue,
    imgDirLeft,
}: CustomSectionsProps) => {
    const bg = bgBlue ? 'bg-[#007CBF]' : 'bg-[#66B0D9]';

    return (
        <div
            className={`${bg} sticky top-0 z-10 m-2 mt-0 flex min-h-screen w-[100%] items-center justify-center overflow-hidden rounded-xl`}
        >
            <div
                className={`${imgDirLeft ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} flex h-full w-full items-center justify-center`}
            >
                <Image
                    src={image}
                    alt="@imageCustomSection"
                    className="h-96 w-96 md:h-1/2 md:w-1/2"
                />
                <div className="flex h-[45vh] flex-col items-start gap-6 p-4 md:justify-center">
                    <div className="rounded-lg bg-[#3396CC] px-2 py-1 text-sm">
                        <span className="flex gap-2 font-semibold text-white">
                            {iconSvg}
                            {iconTitle}
                        </span>
                    </div>
                    <div className="mt-3 flex flex-col gap-3 text-white">
                        <h2 className="text-2xl tracking-tighter md:w-[30rem] md:text-5xl">
                            {title}
                        </h2>
                        <span className="text-md tracking-tighter md:w-96 md:text-xl">
                            {description}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="rounded-md border border-[#ffffffd6] px-2 py-1 font-medium text-[#ffffffd6] md:w-60">
                            Learn More
                        </button>
                        <LoginWithGoogleButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSections;
