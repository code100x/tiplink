import { split as shamirSplit , combine as shamirCombine } from 'shamir-secret-sharing';

interface SecretShares {
    userShareString: string;
    platformShare1String: string;
    platformShare2String: string;
}

async function splitSecret(secretKey: Uint8Array): Promise<SecretShares>  {
    if (!secretKey) {
        throw new Error('Secret is undefined');
    }
    
    try {
        // Split the secret into 3 parts with a threshold of 3
        const shares = await shamirSplit(secretKey, 3, 3);

        const [usershare, platformShare1, platformShare2] = shares;

        // Convert Uint8Array shares to strings
        const userShareString = Buffer.from(usershare).toString('hex');
        const platformShare1String = Buffer.from(platformShare1).toString('hex');
        const platformShare2String = Buffer.from(platformShare2).toString('hex');
        
        return { userShareString, platformShare1String, platformShare2String };
    
    } catch (error) {
        console.error('Error splitting and encrypting secret:', error);
        throw(error)
    }
}


async function combineSecret(userShareString: string, platformShare1String: string, platformShare2String: string): Promise<Uint8Array> {
    if (!userShareString || !platformShare1String || !platformShare2String) {
        throw new Error('Shares are undefined');
    }

    try {
        // Combine the shares to reconstruct the secret
        const shares = [
            Buffer.from(userShareString, 'hex'),
            Buffer.from(platformShare1String, 'hex'),
            Buffer.from(platformShare2String, 'hex')
        ];

        const secret = shamirCombine(shares);
        return secret;
    } catch (error) {
        console.error('Error combining and decrypting secret:', error);
        throw(error)
    }
}