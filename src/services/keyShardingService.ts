import {
  split as shamirSplit,
  combine as shamirCombine,
} from 'shamir-secret-sharing'
const CryptoJS = require('crypto-js')

export async function splitSecret(secretKey: Uint8Array) {
  if (!secretKey) {
    throw new Error('Secret is undefined')
  }
  try {
    const shares = await shamirSplit(secretKey, 3, 3)

    const [aesShare, awsShare, gcpShare] = shares
    const aesShareString = Buffer.from(aesShare).toString('hex')
    const awsShareString = Buffer.from(awsShare).toString('hex')
    const gcpShareString = Buffer.from(gcpShare).toString('hex')

    return { aesShareString, awsShareString, gcpShareString }
  } catch (error) {
    console.error('Error splitting and encrypting secret:', error)
  }
}
