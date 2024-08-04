import img1 from '../../../public/wallet-graphic.png';
import img2 from '../../../public/pro.png';
import { CustomSectionItemsProps } from '@/lib/definitions';
import { DnaIcon, StarIcon, Wallet } from 'lucide-react';

export const CustomSectionItems: Array<CustomSectionItemsProps> = [
    {
        title: "The world's simplest wallet",
        description:
            'Create or login to your secured TipLink wallet with just 2 clicks:',
        bgBlue: true,
        iconSvg: <Wallet className="h-5 w-5 text-white" />,
        iconTitle: 'SolLink Wallet',
        imgDirLeft: true,
        image: img1,
    },
    {
        title: 'Send digital assets at scale, even to non-crypto users',
        description:
            'TipLink makes distributing digital assets as simple as clicking a link.',
        bgBlue: false,
        iconSvg: <StarIcon className="h-5 w-5 text-white" />,
        iconTitle: 'TIPLINK PRO',
        imgDirLeft: false,
        image: img2,
    },
    {
        title: 'Making Solana apps consumer-ready',
        description:
            'Let your users login with just a Google account and start signing transactions.',
        bgBlue: true,
        iconSvg: <DnaIcon className="h-5 w-5 text-white" />,
        iconTitle: 'TIPLINK WALLET ADAPTER',
        imgDirLeft: true,
        image: img2,
    },
];
