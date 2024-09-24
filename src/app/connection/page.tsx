import { createWallet } from '@/services/walletService';
import prisma from '@/db'
import { getServerSession } from 'next-auth';
import { Accept, Reject } from './buttons';

export default async function App() {

  const session = await getServerSession()
  let publickey;
  if (session) {
    const email = session.user?.email ?? undefined
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (user?.publicKey) {
      publickey = user.publicKey
    }
    else {
      console.log(user);
      //@ts-ignore
      publickey = await createWallet(user);
    }
  }


  return (
    <main className='w-full h-[80dvh] flex justify-center items-center flex-col '>
      <Accept publicKey={publickey} />
      <Reject />
    </main>
  )
}


