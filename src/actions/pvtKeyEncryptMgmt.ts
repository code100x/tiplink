'use server'

import prisma from '@/db'
import { authOptions } from '@/lib/auth'
import { aesEncrypt } from '@/services/aes-module'
import { awsEncrypt } from '@/services/aws-kms-module'
import { gcpEncrypt } from '@/services/gcp-kms-module'
import { splitSecret } from '@/services/keyShardingService'
import { getServerSession } from 'next-auth'

export async function pvtKeyEncryptionManager(privateKey: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  const { aesShareString, awsShareString, gcpShareString }: any =
    await splitSecret(new Uint8Array(Buffer.from(privateKey, 'hex')))

  //AES Share 1 -> share encryption AES module
  const aesEncryptedShare = aesEncrypt(aesShareString)
  //AWS Share 2 -> share encryption AWS module
  const awsEncryptedShare = await awsEncrypt(awsShareString, {
    purpose: 'tiplink',
    country: 'India',
  })

  //GCP Share 3 -> share encryption GCP module
  const gcpEncryptedShare = await gcpEncrypt(gcpShareString)
  // DB write

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      aesShare: aesEncryptedShare,
      awsShare: awsEncryptedShare,
      gcpShare: gcpEncryptedShare,
    },
  })
}
