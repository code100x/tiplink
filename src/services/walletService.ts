import { Keypair, Transaction } from '@solana/web3.js';



export function createKeypair() {
    const keypair = Keypair.generate();
    return {
        publicKey: keypair.publicKey,
        secretKey: keypair.secretKey   //uint8Array
        // secretKey: Buffer.from(keypair.secretKey).toString('base64'),    string
    };
}

// reconstrucitng keypair from secret key as 1:1 mapping is maintained between secret key and keypair
export function createKeypairFromSecretKey(secretKey: Uint8Array) {
    const keypair = Keypair.fromSecretKey(secretKey);
    return {
        publicKey: keypair.publicKey,
        secretKey: keypair.secretKey
    };
}


// creating a function to sign a transaction

export function signTransaction(transaction: Transaction, secretKey: Uint8Array) {
    // we need to reconstruct the keypair from the secret key to sign the transaction only public key won't work
    const keypair = Keypair.fromSecretKey(secretKey); 
    transaction.sign(keypair);
    return transaction;
}

