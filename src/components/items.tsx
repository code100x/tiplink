import { Wallet, ArrowDownUp, WalletCards, HandCoins, Cable, Sparkles, CircleDollarSign, Keyboard, Settings, CircleHelp, Send, ArrowDownToLine, CreditCard,SquareMenu,BriefcaseBusiness,Pencil,LogOut } from 'lucide-react';

interface SidebarItem {
    label: string;
    href: string;
    target: string;
    LucidIcon: React.ElementType;
}

export const SidebarItems: SidebarItem[] = [{
    label: "Wallet",
    href: "/wallet",
    target: "",
    LucidIcon: Wallet,
}, {
    label: "Swap",
    href: "/swap",
    target: "_blank",
    LucidIcon: ArrowDownUp, 
}, {
    label: "Wallet-Adapter",
    href: "/wallet-adapter",
    target: "",
    LucidIcon: WalletCards, 
}, {
    label: "API",
    href: "/api",
    target: "_blank",
    LucidIcon: Cable, 
}, {
    label: "Pro Version",
    href: "/pro",
    target: "_blank",
    LucidIcon: Sparkles,
}];

export const SidebarItemsBottom: SidebarItem[] =[{
    label:"Keyboard Shortcuts",
    href:"/shortcuts",
    target:"",
    LucidIcon: Keyboard,
},{
    label:"Settings",
    href:"/settings",
    target:"",
    LucidIcon: Settings,
},{
    label:"Help Center",
    href:"/help",
    target:"",
    LucidIcon: CircleHelp,
}];

export const CardItems: SidebarItem[] =[{
    label:"Send",
    href:"/send",
    target:"",
    LucidIcon: Keyboard,
},{
    label:"Receive",
    href:"/receive",
    target:"",
    LucidIcon: ArrowDownToLine,
},{
    label:"Buy",
    href:"",
    target:"",
    LucidIcon: CreditCard,
},{
    label:"Swap",
    href:"/",
    target:"",
    LucidIcon: ArrowDownUp,
},
] 

export const ContentSidebarItems: SidebarItem[] = [{
    label:"Buy",
    href:"",
    target:"",
    LucidIcon: WalletCards,
},{
    label:"Crowd Fund",
    href:"/send",
    target:"",
    LucidIcon: CircleDollarSign,
},
{
    label:"NFTs",
    href:"/",
    target:"",
    LucidIcon: Keyboard,
},{
    label:"Assets",
    href:"/",
    target:"",
    LucidIcon: HandCoins,
},{
    label:"FAQs",
    href:"/",
    target:"",
    LucidIcon: SquareMenu,
}]

export  const ContentSidebarItemsBottom: SidebarItem[] = [
{
    label:"Career",
    href:"/career",
    target:"",
    LucidIcon: BriefcaseBusiness,
},{
    label:"Blog",
    href:"/blog",
    target:"",
    LucidIcon: Pencil,
},{
    label:"Log out",
    href:"/",
    target:"",
    LucidIcon: LogOut,
}]