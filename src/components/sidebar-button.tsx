import { Icon } from 'next/dist/lib/metadata/types/metadata-types'

interface IconProps {
  label: string
  href: string
  LucidIcon: React.ElementType
  target: string
}

export const SideButton = ({ label, href, LucidIcon, target }: IconProps) => {
  return (
    <div className="w-[250px] flex items-start gap-x-4 hover:bg-zinc-900 hover:text-zinc-50 p-3 rounded-lg px-4 hover:cursor-pointer">
      <LucidIcon /> <h1 className="text-lg">{label}</h1>
    </div>
  );
};

export const ContentButton = ({ label, href, LucidIcon, target }: IconProps) => {
  return (
    <div className="w-[250px] flex flex-col items-center gap-x-4 p-3 rounded-lg px-4 hover:cursor-pointer">
     <div className='bg-zinc-900 p-4 rounded-lg'>
      <LucidIcon className="text-zinc-50" />
      </div>
       <h1 className="text-sm mt-1">{label} </h1>
    </div>
  )
}

export const DataCard = ({ label, href, LucidIcon, target }: IconProps) => {
  return (
    <div className="w-[250px] flex items-start gap-x-4 hover:bg-zinc-900 hover:text-zinc-50 p-3 rounded-lg px-4 hover:cursor-pointer">
      <LucidIcon className="text-zinc-50" /> <h1 className="text-lg text-zinc-50">{label}</h1>
    </div>
  );
};
