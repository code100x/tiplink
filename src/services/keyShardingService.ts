import {
  split as shamirSplit,
  combine as shamirCombine,
} from 'shamir-secret-sharing'
const CryptoJS = require('crypto-js')

async function encryptData(data: string, PlatformsecretKey: string) {
  // Encrypting the data using AES
  const encrypted = CryptoJS.AES.encrypt(data, PlatformsecretKey).toString()
  return encrypted
}

async function splitSecret(secretKey: Uint8Array) {
  if (!secretKey) {
    throw new Error('Secret is undefined')
  }

  try {
    // Split the secret into 4 parts with a threshold of 4
    const shares = await shamirSplit(secretKey, 4, 4)

    const [usershare, platformShare1, platformShare2, platformShare3] = shares
    // console.log('User Share:', usershare)
    // console.log('Platform Share 1:', platformShare1)
    // console.log('Platform Share 2:', platformShare2)
    // console.log('Platform Share 3:', platformShare3)

    // Convert Uint8Array shares to strings
    const userShareString = Buffer.from(usershare).toString('hex')
    const platformShare1String = Buffer.from(platformShare1).toString('hex')
    const platformShare2String = Buffer.from(platformShare2).toString('hex')
    const platformShare3String = Buffer.from(platformShare3).toString('hex')

    // Encrypt the shares
    const encryptedUserShare = await encryptData(
      userShareString,
      platformSecretKey,
    )
    const encryptedPlatformShare1 = await encryptData(
      platformShare1String,
      platformSecretKey,
    )
    const encryptedPlatformShare2 = await encryptData(
      platformShare2String,
      platformSecretKey,
    )
    const encryptedPlatformShare3 = await encryptData(
      platformShare3String,
      platformSecretKey,
    )

    return {
      encryptedUserShare,
      encryptedPlatformShare1,
      encryptedPlatformShare2,
      encryptedPlatformShare3,
    }
  } catch (error) {
    console.error('Error splitting and encrypting secret:', error)
  }
}

// Example usage
// const secret = new Uint8Array([
//   222, 166, 113, 52, 86, 82, 126, 204, 177, 188, 253, 85, 71, 6, 130, 72, 82,
//   67, 155, 93, 112, 205, 136, 41, 134, 245, 81, 39, 228, 246, 7, 44, 187, 153,
//   10, 31, 6, 26, 126, 243, 118, 109, 16, 109, 166, 0, 82, 232, 66, 77, 193, 175,
//   228, 98, 239, 47, 31, 113, 133, 184, 84, 190, 11, 100,
// ])
const platformSecretKey = '1111' // This should be a strong key in a real application
const userPin = '1234'

// async function main() {
//   const encryptedShares = await splitSecret(secret)
//   console.log('Encrypted Shares:', encryptedShares)
// }

// main()
