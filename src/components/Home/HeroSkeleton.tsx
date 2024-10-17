import AppBarSkeleton from "../Appbar/AppBarSkeleton"

export const HeroSkeleton = () => {
  return (
    <section className="items-center md:mt-40 mt-28">
      <AppBarSkeleton/>
      <div className="container relative mx-auto px-4">
        {/* Maintain exact image positions */}
        <div className="relative left-[10%] lg:left-[30%] w-[50px] h-[50px] animate-pulse bg-gray-700/50 rounded-full" />
        <div className="absolute md:right-[20%] right-[10%] lg:right-[28%] rotate-12 md:top-[26%] top-[34%] lg:top-[34%] w-[50px] h-[50px] animate-pulse bg-gray-700/50 rounded-full" />
        
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
          {/* Title skeleton matching exact text size */}
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-center">
            <div className="h-24 md:h-32 lg:h-40 bg-gray-700/50 animate-pulse rounded-lg" />
          </div>

          {/* Paragraph skeleton matching exact text size and layout */}
          <div className="text-lg tracking-tighter text-center mt-5 space-y-2">
            <div className="h-6 w-3/4 mx-auto bg-gray-700/50 animate-pulse rounded" />
            <div className="hidden md:block h-6 w-2/3 mx-auto bg-gray-700/50 animate-pulse rounded" />
          </div>
        </div>

        {/* Button skeleton matching exact button size */}
        <div className="flex items-center justify-center mt-5">
          <div className="h-[52px] w-[180px] md:w-[200px] bg-gray-700/50 animate-pulse rounded-lg" />
        </div>
      </div>
    </section>
  )
}


