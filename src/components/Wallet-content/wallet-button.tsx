import { FaWallet } from 'react-icons/fa6'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const WalletButton = () => {

  return (
    <div>
      <WalletMultiButton
        style={{
          backgroundColor: 'black',
          height: '40px',
          borderRadius: '8px',
        }}
        endIcon={<FaWallet />}
      />
    </div>
  );
};







