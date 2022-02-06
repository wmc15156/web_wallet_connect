import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'
import { URLS } from '../chains'

export const [walletConnect, hooks] = initializeConnector(
  (actions) =>
    new WalletConnect(actions, {
      rpc: Object.keys(URLS).reduce((accumulator, chainId) => {
        accumulator[Number(chainId)] = URLS[Number(chainId)][0]
        return accumulator
      }, {}),
    }),
  Object.keys(URLS).map((chainId) => Number(chainId))
)
