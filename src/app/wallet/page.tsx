import LeftSideBar from '../../components/WalletPage/LeftSideBar'
import RightSideBar from '../../components/WalletPage/RightSideBar'
import TopBar from '../../components/WalletPage/TopBar'
import WalletDetail from '../../components/WalletPage/WalletDetail'

const Wallet = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div className="flex justify-between pt-10">
        <div className="hidden sm:block">
          <LeftSideBar />
        </div>
        <div>
          <WalletDetail />
        </div>
        <div className="pr-15 hidden md:block">
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default Wallet
