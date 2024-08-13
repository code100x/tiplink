import Logo from '../../components/icons/Logo'
import Sidebar from './ui/Sidebar'

const TopBar = () => {
  return (
    <div className="flex sm:p-5 sm:pb-0">
      <div className="block sm:hidden">
        <Sidebar />
      </div>
      <div className="hidden sm:block border h-6 w-6 sm:h-10 sm:w-10 rounded-lg inline-flex justify-center items-center">
        <Logo className="h-4 w-4 sm:h-8 sm:w-8" fill="#000000" />
      </div>
      <div className="pl-[5%] sm:pl-[30%] pt-3 sm:pt-0 ">
        <input
          className="bg-black rounded-full p-2 w-[70%] sm:w-[150%] lg text-white"
          placeholder="search"
        ></input>
      </div>
      <div className="sm:pl-[50%] pt-3 sm:pt-0">
        <p className="flex justify-center items-center bg-black rounded-full w-10 h-10    text-white">
          AJ
        </p>
      </div>
    </div>
  )
}

export default TopBar
