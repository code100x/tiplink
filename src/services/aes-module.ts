import crypto from 'crypto'

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
const IV_LENGTH = 16

export function aesEncrypt(plainText: any) {
  if (!ENCRYPTION_KEY) {
    throw new Error('Encryption key is not set')
  }
  try {
    const encryptionKey32 = crypto.createHash('sha256').update(Buffer.from(ENCRYPTION_KEY, 'hex')).digest();
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv(
      'aes-256-ctr',
      encryptionKey32,
      iv
    )
    let encrypted = cipher.update(plainText, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return iv.toString('hex') + ':' + encrypted
  } catch (error) {
    throw new Error(`AES fails: ${error}`)
  }
}

export function aesDecrypt(encryptedData: any) {
  if (!ENCRYPTION_KEY) {
    throw new Error('Encryption key is not set')
  }

  const textParts = encryptedData.split(':')
  const iv = Buffer.from(textParts.shift(), 'hex')
  const encryptedText = Buffer.from(textParts.join(':'), 'hex')

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION_KEY),
    iv,
  )

  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}
