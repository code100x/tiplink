import prisma from '@/db'
import { createWallet } from '@/services/walletService'
import { getServerSession } from 'next-auth'
import LeftSideBar from '../../components/WalletPage/LeftSideBar'
import RightSideBar from '../../components/WalletPage/RightSideBar'
import TopBar from '../../components/WalletPage/TopBar'
import WalletDetail from '../../components/WalletPage/WalletDetail'
const Wallet = async () => {
  const session = await getServerSession()

  if (session) {
    const email = session.user?.email ?? undefined
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    if (user) {
      const wallet = await createWallet(user)
      console.log(wallet)
    }
  }

  return (
    <div className="h-full flex flex-col items-center">
      <TopBar />
      <div className="flex justify-between grow w-full">
        <div className="hidden sm:block min-w-1/5">
          <LeftSideBar />
        </div>
        <div className="w-full flex-1 sm:w-4/5 flex justify-center items-center border rounded-md p-5">
          <WalletDetail />
        </div>
        <div className=" hidden md:block">{/* <RightSideBar /> */}</div>
      </div>
    </div>
  )
}

export default Wallet
