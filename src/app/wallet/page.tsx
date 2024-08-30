import LeftSideBar from '../../components/WalletPage/LeftSideBar'
import RightSideBar from '../../components/WalletPage/RightSideBar'
import TopBar from '../../components/WalletPage/TopBar'
import WalletDetail from '../../components/WalletPage/WalletDetail'

const Wallet = () => {
  return (
    <div className="h-full flex flex-col ">
        <TopBar />
      <div className="flex justify-between  grow ">
        <div className="hidden sm:block w-1/5">
          <LeftSideBar />
        </div>
        <div className=" w-4/5 flex justify-center items-center">
          <WalletDetail />
        </div>
        <div className=" hidden md:block">
          {/* <RightSideBar /> */}
        </div>
      </div>
    </div>
  )
}

export default Wallet
