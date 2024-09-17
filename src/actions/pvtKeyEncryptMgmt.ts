'use server'

import { splitSecret } from "@/services/keyShardingService"

export async function pvtKeyEncryptionManager(privateKey: string) {
    await splitSecret(Buffer.from(privateKey, 'hex'))

    //AES Share 1 -> share encryption AES module then store in db
        
    //AWS Share 2 ->  share encryption AWS module then store in db

    //GCP Share 3 -> share encryption GCP module then store in db

}