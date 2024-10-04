'use client'

import { Button } from '@/components/ui/button'

export function Accept({ publicKey }: any) {

  async function onUserApprovedConnection() {
    const message = {
      type: 'WALLET_CONNECTED',
      publicKey: publicKey,
    };
    window.opener.postMessage(message, '*');
    window.close();
  }

  return (
    <>
      <Button onClick={() => onUserApprovedConnection()} className='w-[250px] m-5' >Approve</Button>
    </>
  )
}

export function Reject() {

  function onUserRejectedConnection() {
    const message = {
      type: 'WALLET_CONNECTION_REJECTED',
    };
    window.opener.postMessage(message, '*');
    window.close();
  }

  return (
    <>
      <Button onClick={() => onUserRejectedConnection()} className='w-[250px]' variant="secondary" >Reject</Button>
    </>
  )
}
