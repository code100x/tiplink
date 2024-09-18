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

  const { aesShareString, awsShareString, gcpShareString } =
    await splitSecret(privateKey)

  const aesEncryptedShare = aesEncrypt(aesShareString)
  const awsEncryptedShare = await awsEncrypt(awsShareString, {
    purpose: 'tiplink',
    country: 'India',
  })
  const gcpEncryptedShare = await gcpEncrypt(gcpShareString)

  await prisma.user.update({
    where: { id: userId },
    data: {
      aesShare: aesEncryptedShare,
      awsShare: awsEncryptedShare,
      gcpShare: gcpEncryptedShare,
    },
  })
}
