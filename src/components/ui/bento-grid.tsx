import { ReactNode } from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[18rem] grid-cols-3 gap-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  img,
  imgClassName,
  href,
  cta,
}: {
  name: string
  className: string
  background?: ReactNode
  Icon?: any
  description: string
  img?: string
  imgClassName?: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-gray-700',
      // light styles
      ' [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className,
    )}
  >
    <div>
      <div className="w-full h-full absolute">
        {img && (
          <Image
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover object-center ')}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* <Icon className="h-12 w-12 origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
      <h3 className="text-xl font-semibold  text-white">{name}</h3>
      <p className="max-w-lg text-white ">{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto text-white hover:text-blue-500 hover:underline"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
