import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
// import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default class WalletConnectWrapper extends React.Component {
  
  render(){
    return (
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          const WC = require('./WalletConnect').default;
          return (
            <>
              <WC site={this.props.children}/>
            </>
          )
        }}
      </BrowserOnly>
    );
  }

};