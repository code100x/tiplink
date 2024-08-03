import Image from 'next/image';
import React from 'react';
import LoginWithGoogleButton from './login-with-google';
import { CustomSectionsProps } from '@/lib/definitions';

const CustomSections = ({ title, description, iconSvg, iconTitle, image, bgBlue, imgDirLeft }: CustomSectionsProps) => {
  const bg = bgBlue ? "bg-[#007CBF]" : "bg-[#66B0D9]";

  return (
    <div className={`${bg} min-h-screen w-[100%] overflow-hidden m-2 mt-0 flex justify-center items-center rounded-xl sticky top-0 z-10`}>
      <div className={`${imgDirLeft ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} h-full w-full flex justify-center items-center`}>
        <Image src={image} alt='@imageCustomSection' className='md:h-1/2 md:w-1/2 w-96 h-96' />
        <div className='flex flex-col md:justify-center gap-6 items-start p-4 h-[45vh]'>
          <div className='px-2 py-1 text-sm bg-[#3396CC] rounded-lg'>
            <span className='flex gap-2 text-white font-semibold'>
              {iconSvg}{iconTitle}
            </span>
          </div>
          <div className='flex mt-3 flex-col gap-3 text-white'>
            <h2 className='md:text-5xl text-2xl tracking-tighter md:w-[30rem]'>{title}</h2>
            <span className='md:text-xl text-md md:w-96 tracking-tighter'>{description}</span>
          </div>
          <div className='flex items-center gap-3'>
            <button className='md:w-60 border border-[#ffffffd6] rounded-md py-1 px-2 font-medium text-[#ffffffd6]'>Learn More</button>
            <LoginWithGoogleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSections;
