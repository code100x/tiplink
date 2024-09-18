'use server'

import prisma from '@/db'
import { authOptions } from '@/lib/auth'
import { aesDecrypt } from '@/services/aes-module'
import { awsDecrypt } from '@/services/aws-kms-module'
import { gcpDecrypt } from '@/services/gcp-kms-module'
import { combineSecret } from '@/services/keyShardingService'
import { getServerSession } from 'next-auth'
import bs58 from 'bs58'

export async function pvtKeyDecryptionManager() {
  try {
    const session = await getServerSession(authOptions)
    const userId = session.user.id

    const { aesShare, awsShare, gcpShare }: any = await prisma.user.findFirst({
      where: { id: userId },
      select: { aesShare: true, awsShare: true, gcpShare: true },
    })

    const decryptedAesShare = aesDecrypt(aesShare)
    const decryptedAwsShare = await awsDecrypt(awsShare, {
      purpose: 'tiplink',
      country: 'India',
    })
    const decryptedGcpShare = await gcpDecrypt(gcpShare)

    const aesShareArray = new Uint8Array(Buffer.from(decryptedAesShare, 'hex'))
    const awsShareArray = new Uint8Array(Buffer.from(decryptedAwsShare, 'hex'))
    const gcpShareArray = new Uint8Array(Buffer.from(decryptedGcpShare, 'hex'))

    const res = await combineSecret([
      aesShareArray,
      awsShareArray,
      gcpShareArray,
    ])

    const privateKey = bs58.encode(res)

    return privateKey
  } catch (error) {
    console.error('Error in pvtKeyDecryptionManager:', error)
    throw error
  }
}
