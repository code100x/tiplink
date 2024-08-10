import { split as shamirSplit } from 'shamir-secret-sharing';

interface SecretShares {
    userShareString: string;
    platformShare1String: string;
    platformShare2String: string;
    platformShare3String: string;
}

async function splitSecret(secretKey: Uint8Array): Promise<SecretShares>  {
    if (!secretKey) {
        throw new Error('Secret is undefined');
    }
    
    try {
        // Split the secret into 4 parts with a threshold of 4
        const shares = await shamirSplit(secretKey, 4, 4);

        const [usershare, platformShare1, platformShare2, platformShare3] = shares;

        // Convert Uint8Array shares to strings
        const userShareString = Buffer.from(usershare).toString('hex');
        const platformShare1String = Buffer.from(platformShare1).toString('hex');
        const platformShare2String = Buffer.from(platformShare2).toString('hex');
        const platformShare3String = Buffer.from(platformShare3).toString('hex');
        
        return { userShareString, platformShare1String ,platformShare2String , platformShare3String };
    
    } catch (error) {
        console.error('Error splitting and encrypting secret:', error);
        throw(error)
    }
}


