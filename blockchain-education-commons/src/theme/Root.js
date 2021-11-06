import React from 'react';
import WalletConnectWrapper from '../components/WalletConnectWrapper';

// Default implementation, that you can customize
function Root({children}) {
  return (
    <>
        <WalletConnectWrapper children={children}/>
    </>
  )
}

export default Root;