import { split as shamirSplit } from 'shamir-secret-sharing';

interface SecretShares {
    userShareString: string;
    platformShare1String: string;
    platformShare2String: string;
    platformShare3String: string;
}

async function splitSecret(secretKey: Uint8Array): Promise<SecretShares> {
    if (!secretKey || secretKey.length === 0) {
        throw new Error('Secret key is undefined or empty');
    }
    
    try {
        // Split the secret into 4 parts with a threshold of 4
        const shares = await shamirSplit(secretKey, 4, 4);

        // Convert Uint8Array shares to hexadecimal strings
        const [userShare, platformShare1, platformShare2, platformShare3] = shares;
        const userShareString = Buffer.from(userShare).toString('hex');
        const platformShare1String = Buffer.from(platformShare1).toString('hex');
        const platformShare2String = Buffer.from(platformShare2).toString('hex');
        const platformShare3String = Buffer.from(platformShare3).toString('hex');

        return { userShareString, platformShare1String, platformShare2String, platformShare3String };
    } catch (error) {
        // Log the error and rethrow it for further handling
        console.error('Error splitting secret:', error);
    }
}

// // Example usage
// const secret = new Uint8Array([222, 166, 113, 52, 86, 82, 126, 204, 177, 188, 253, 85, 71, 6, 130, 72, 82, 67, 155, 93, 112, 205, 136, 41, 134, 245, 81, 39, 228, 246, 7, 44, 187, 153, 10, 31, 6, 26, 126, 243, 118, 109, 16, 109, 166, 0, 82, 232, 66, 77, 193, 175, 228, 98, 239, 47, 31, 113, 133, 184, 84, 190, 11, 100]);
// const platformSecretKey = "1111";
// const userPin = '1234';
// async function main() {
//     await splitSecret(secret);
// }

