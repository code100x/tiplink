import { getServerSession } from 'next-auth'
import LeftSideBar from '../../components/WalletPage/LeftSideBar'
import RightSideBar from '../../components/WalletPage/RightSideBar'
import TopBar from '../../components/WalletPage/TopBar'
import WalletDetail from '../../components/WalletPage/WalletDetail'
import { createWallet, fetchUserBalance } from '@/services/walletService'
import prisma from '@/db'
const Wallet = async () => {
  const session = await getServerSession()

  let wallet, balance

  if (session) {
    const email = session.user?.email ?? undefined
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
    if (user) {
      wallet = user?.publicKey ? user.publicKey : await createWallet(user)
      balance = await fetchUserBalance(wallet)
    }
  }

  return (
    <div className="h-full flex flex-col ">
        <TopBar />
      <div className="flex justify-between  grow ">
        <div className="hidden sm:block w-1/5">
          <LeftSideBar />
        </div>
        <div>
          <WalletDetail wallet={wallet} balance={balance} />
        </div>
        <div className=" hidden md:block">
          {/* <RightSideBar /> */}
        </div>
      </div>
    </div>
  )
}

export default Wallet
