import { Send, Download, CreditCard, ArrowDownUp } from 'lucide-react';

export const actions = [
  { icon: Send, label: 'Send', type: 'send' as const },
  { icon: Download, label: 'Receive', type: 'receive' as const },
  { icon: CreditCard, label: 'Buy', type: 'buy' as const },
  { icon: ArrowDownUp, label: 'Swap', type: 'swap' as const },
];

export type ActionType = typeof actions[number]['type'];