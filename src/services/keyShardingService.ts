import base58 from 'bs58'
import {
  split as shamirSplit,
  combine as shamirCombine,
} from 'shamir-secret-sharing'


export async function splitSecret(privateKey: string) {
  if (!privateKey) {
    throw new Error('Private key is undefined')
  }
  try {
    const secretKeyUint8Array = new Uint8Array(base58.decode(privateKey))

    const shares = await shamirSplit(secretKeyUint8Array, 4, 4)

    const [aesShare, awsShare, gcpShare] = shares
    const aesShareString = Buffer.from(aesShare).toString('hex')
    const awsShareString = Buffer.from(awsShare).toString('hex')
    const gcpShareString = Buffer.from(gcpShare).toString('hex')

    return { aesShareString, awsShareString, gcpShareString }
  } catch (error) {
    console.error('Error splitting secret:', error)
    throw error
  }
}

export async function combineSecret(shares: Uint8Array[]) {
  if (!shares || shares.length === 0) {
    throw new Error('Shares are undefined or empty')
  }

  try {
    const secretKey = await shamirCombine(shares)
    return new Uint8Array(secretKey)
  } catch (e) {
    console.error('Error while combining shares: ', e)
    throw e
  }
}
