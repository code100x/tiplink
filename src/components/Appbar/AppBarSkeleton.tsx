
const AppBarSkeleton = () => {
  return (
    <header className="animate-pulse w-screen py-4 border-b dark:border-white md:border-none fixed top-0 left-0 right-0 bg-white dark:bg-black md:bg-white/0 dark:md:bg-black/0 z-50">
      <div className="container pl-32 px-4">
        <div className="flex justify-between items-center md:border dark:md:border-white md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto md:bg-white/90 dark:md:bg-black/90 md:backdrop:blur-sm">
          <div>
            <div className="h-10 w-10 rounded-lg inline-flex justify-center items-center bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 rounded-md">
              <div className="rounded-md bg-gray-300 dark:bg-gray-700 w-20 h-5"></div>
              <div className="rounded-md bg-gray-300 dark:bg-gray-700 w-20 h-5"></div>
              <div className="rounded-md bg-gray-300 dark:bg-gray-700 w-20 h-5"></div>
              <div className="rounded-md bg-gray-300 dark:bg-gray-700 w-20 h-5"></div>
            </nav>
          </div>
          <div className="rounded-md h-8 w-20 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </header>
  );
};

export default AppBarSkeleton;

