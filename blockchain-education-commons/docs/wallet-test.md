---
title: Wallet Connection Demo
id: wallet-test
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page demonstrates how we can access a Celo wallet from within a Docusaurus docs page.

This enables new features, particularly around accessing the Celo network from within docs pages. We could use docs pages as interactive components for teaching about javascript libraries as well as reading data directly from the Celo blockchain.

## Possibilities

This allows us to do a few cool new things, including but not limited to following:

- Create token gated content on a docusaurus instance
  - Issue NFTs for access to course content, maybe by staking cUSD
  - Issue NFTs for course completion and participation
  - Create a corresponding token gated discord to create a community of students
- Keep all of this content open source and accessible on github
- Leverage the existing work around translations for documentation
- Show developers how to interact with a wallet programatically directly in the browser
  - Send transactions and deploy contracts from these pages
- Create a payments course that uses the [live codeblock](https://docusaurus.io/docs/api/themes/@docusaurus/theme-live-codeblock) plugin + Contractkit to show how do everything related to payments

## Demo

Here is an example component that connects to a wallet via wallet connect:

<!-- <WalletConnectWrapper/> -->

## Why use Docusaurus for this?

We could use an existing LMS for creating a course, but docusaurus is way more customizable.

- Easy to contribute content. Most of the content will be written in markdown and hosted on Github, making it easy for community additions.
- It is built using React, the go-to framework for building DApps today. We can show how to build using React, right in Docusaurus. This is not possible using most other LMSs.
- We can keep the repo on GitHub and start building a community around it. Include other ecosystem partners and educators in making this better.
- We can leverage the Crowdin translations process set of for the docs site.

## Live coding example

```jsx live

function MetamaskUtils(){

    const CUSD_PARAMS = {
      type: 'ERC20',
      options: {
        address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
        symbol: 'cUSD',
        decimals: 18
      }
    }

    const NETWORK_PARAMS = { 
      chainId: '0xa4ec', 
      chainName: 'Celo', 
      nativeCurrency: { 
        name: 'Celo', 
        symbol: 'CELO', 
        decimals: 18 
      }, 
      rpcUrls: ['https://forno.celo.org'], 
      blockExplorerUrls: ['https://explorer.celo.org/'], 
      iconUrls: ['future'] 
    }

    async function connectMetamask(){
      await window.ethereum.enable()
    }

    async function addToken(){
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: CUSD_PARAMS
        });    
    }

    async function addNetwork(){
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [NETWORK_PARAMS],
        });      
    }

    return (
      <div>
        <button onClick={connectMetamask}>Connect Metamask</button><br/>
        <button onClick={addNetwork}>Connect to Celo Mainnet</button><br/>
        <button onClick={addToken}>Add cUSD (mainnet)</button>
      </div>
    )
}
```

<Tabs defaultValue="Problem">

<TabItem value="Problem" label="Problem">

```jsx live
// Outline the problem here (as a React component)
function doTheThing(){
  
  return <></>
}
```

</TabItem>
<TabItem value="Solution" label="Solution">

``` jsx live

function MetamaskTest(){

    async function send(){
        let web3 = new Web3(window.ethereum)
        let accounts = await web3.eth.getAccounts()
        let tx = {
          to: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
          value: 100000000000000000,
          from: accounts[0]
        } 
  
        let result = await web3.eth.sendTransaction(tx)
        console.log(result)
    }

    return (
      <div>
        <button onClick={send}>Send Tx</button>
      </div>
    )
}
```

</TabItem>
</Tabs>
  
## REPLit
  
<iframe frameborder="0" width="100%" height="1000px" src="https://replit.com/@critesjosh/celo-transactions-lesson?lite=true"></iframe>

