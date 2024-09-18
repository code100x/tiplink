'use server'

import {
  CommitmentPolicy,
  KmsKeyringNode,
  buildClient,
} from '@aws-crypto/client-node'

const generatorKeyId = process.env.AWS_CMK_ARN
if (!generatorKeyId) {
  throw new Error('AWS_CMK_ARN is not set')
}

const keyring = new KmsKeyringNode({ generatorKeyId })

const { encrypt, decrypt } = buildClient(
  CommitmentPolicy.REQUIRE_ENCRYPT_ALLOW_DECRYPT,
)

export async function awsEncrypt(
  plainText: string,
  context: Record<string, string>,
) {
  try {
    const { result } = await encrypt(keyring, plainText, {
      encryptionContext: context,
    })
    return Buffer.from(result).toString('base64')
  } catch (e) {
    console.error('Encryption error:', e)
    throw e
  }
}

export async function awsDecrypt(
  encryptedData: string,
  context: Record<string, string>,
) {
  try {
    const encryptedBuffer = Buffer.from(encryptedData, 'base64')
    const { plaintext, messageHeader } = await decrypt(keyring, encryptedBuffer)
    console.log('===== Message Header =======')
    console.log(JSON.stringify(messageHeader.encryptionContext))

    Object.entries(context).forEach(([key, value]) => {
      if (messageHeader.encryptionContext[key] !== value) {
        throw new Error('Encryption Context does not match expected values')
      }
    })

    return new TextDecoder().decode(plaintext)
  } catch (e) {
    console.error('Decryption error:', e)
    throw e
  }
}
