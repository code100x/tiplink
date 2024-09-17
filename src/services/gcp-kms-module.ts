'use server'

import { KeyManagementServiceClient } from '@google-cloud/kms'

const client = new KeyManagementServiceClient()

const projectId = process.env.PROJECT_ID
const locationId = process.env.LOCATION_ID
const keyRingId = process.env.KEY_RING_ID
const keyId = process.env.KEY_ID

if (!projectId || !locationId || !keyRingId || !keyId) {
  throw new Error('GCP KMS IDs not set')
}

const keyName = client.cryptoKeyPath(projectId, locationId, keyRingId, keyId)

export async function gcpEncrypt(plaintext: string): Promise<string> {
  try {
    const [encryptResponse] = await client.encrypt({
      name: keyName,
      plaintext: Buffer.from(plaintext),
    })

    if (!encryptResponse.ciphertext) {
      throw new Error('Encryption failed: No ciphertext returned')
    }

    return Buffer.from(encryptResponse.ciphertext).toString('base64')
  } catch (error) {
    console.error('Encryption error:', error)
    throw error
  }
}

export async function gcpDecrypt(ciphertext: string): Promise<string> {
  try {
    const [decryptResponse] = await client.decrypt({
      name: keyName,
      ciphertext: Buffer.from(ciphertext, 'base64'),
    })

    if (!decryptResponse.plaintext) {
      throw new Error('Decryption failed: No plaintext returned')
    }

    return decryptResponse.plaintext.toString()
  } catch (error) {
    console.error('Decryption error:', error)
    throw error
  }
}
