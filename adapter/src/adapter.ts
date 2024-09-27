import { ed25519 } from '@noble/curves/ed25519';
import type { WalletName } from '@solana/wallet-adapter-base';
import {
  BaseSignInMessageSignerWalletAdapter,
  WalletNotConnectedError,
  WalletReadyState,
} from '@solana/wallet-adapter-base';
import { type SolanaSignInInput, type SolanaSignInOutput } from '@solana/wallet-standard-features';
import { createSignInMessage } from '@solana/wallet-standard-util';
import { Transaction, TransactionVersion, VersionedTransaction, TransactionSignature } from '@solana/web3.js';
import { Keypair, PublicKey } from '@solana/web3.js';
import { Buffer } from 'buffer';

export const _100xLinkWalletName = '100xLink' as WalletName<'100xLink'>;

export class _100xLinkWalletAdapter extends BaseSignInMessageSignerWalletAdapter {
  name = _100xLinkWalletName;
  url = 'https://github.com/anza-xyz/wallet-adapter#usage';
  icon =
    'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTAgNjBDMzguMTM3MSA2MCA2MCAzOC4xMzcxIDYwIDBDNjAgMzguMTM3MSA4MS44NjI5IDYwIDEyMCA2MEM4MS44NjI5IDYwIDYwIDgxLjg2MjkgNjAgMTIwQzYwIDgxLjg2MjkgMzguMTM3MSA2MCAwIDYwWiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQo8L3N2Zz4=';
  supportedTransactionVersions: ReadonlySet<TransactionVersion> = new Set(['legacy', 0]);

  private _keypair: Keypair | null = null;
  private _publicKey: PublicKey | null = null;
  private _connecting = false;

  get connecting() {
    return this._connecting;
  }

  get publicKey() {
    return this._keypair && this._keypair.publicKey;
  }

  get readyState() {
    return WalletReadyState.Loadable;
  }


  async connect(): Promise<void> {
    if (this.connecting) throw new Error('Already connecting');

    return new Promise((resolve, reject) => {
      const popup = window.open(
        //replace this url in production
        'http://localhost:3000/connection',
        '_blank',
        'width=500,height=600'
      );

      const interval = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(interval);
          reject(new Error('User closed the popup or connection failed'));
          return;
        }
      }, 500);

      const onMessage = (event: MessageEvent) => {
        if (event.data.publicKey) {
          this._publicKey = new PublicKey(event.data.publicKey);
          this.emit('connect', this._publicKey);
          resolve();
        } else {
          reject(new Error('Failed to connect'));
        }

        clearInterval(interval);
        window.removeEventListener('message', onMessage);
        if (popup) {
          popup.close();
        }
      };

      window.addEventListener('message', onMessage);
    });
  }

  async disconnect(): Promise<void> {
    this._publicKey = null;
    this.emit('disconnect');
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T> {
    if (!this._publicKey) throw new WalletNotConnectedError();

    return new Promise((resolve, reject) => {
      const serializedTransaction = transaction.serialize({
        requireAllSignatures: false,
      }).toString('base64');

      sessionStorage.setItem('transaction', serializedTransaction);

      const popup = window.open('http://localhost:3000/sign-transaction', '_blank', 'width=500,height=600');

      const sendTransaction = () => {
        console.log("window loaded and Checking if there is a popup")
        if (popup) {
          console.log('Sending transaction to wallet');
          popup.postMessage({
            type: 'TRANSACTION_DATA',
            transaction: serializedTransaction,
          }, 'http://localhost:3000/sign-transaction');
        } else {
          console.error('Failed to open wallet popup');
        }
      };

      const onMessage = (event: MessageEvent) => {
        if (event.origin !== 'http://localhost:3000') return;

        if (event.data.type === 'SIGNED_TRANSACTION' && event.data.signedTransaction) {
          const signedTransactionBuffer = Buffer.from(event.data.signedTransaction, 'base64');
          const signedTransaction = Transaction.from(signedTransactionBuffer);

          window.removeEventListener('message', onMessage);
          if (popup) popup.close();

          resolve(signedTransaction as T);
        } else if (event.data.type === 'SIGN_TRANSACTION_FAILED') {
          reject(new Error('Transaction signing failed'));
        }
      };
      window.addEventListener('message', onMessage);

      console.log("checking of page is loading");
      setTimeout(sendTransaction, 1500);

    });
  }


  // async sendTransaction(
  //     transaction: Transaction,
  //     connection: Connection,
  //     options: SendTransactionOptions = {}
  // ): Promise<TransactionSignature> {
  // 
  // }


  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    if (!this._keypair) throw new WalletNotConnectedError();

    return ed25519.sign(message, this._keypair.secretKey.slice(0, 32));
  }

  async signIn(input: SolanaSignInInput = {}): Promise<SolanaSignInOutput> {
    const { publicKey, secretKey } = (this._keypair ||= new Keypair());
    const domain = input.domain || window.location.host;
    const address = input.address || publicKey.toBase58();

    const signedMessage = createSignInMessage({
      ...input,
      domain,
      address,
    });
    const signature = ed25519.sign(signedMessage, secretKey.slice(0, 32));

    this.emit('connect', publicKey);

    return {
      account: {
        address,
        publicKey: publicKey.toBytes(),
        chains: [],
        features: [],
      },
      signedMessage,
      signature,
    };
  }

}


