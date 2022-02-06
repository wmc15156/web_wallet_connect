
const ETH = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
}

const MATIC = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
}

// interface BasicChainInformation {
//   urls: string[]
//   name: string
// }
//
// interface ExtendedChainInformation extends BasicChainInformation {
//   nativeCurrency: AddEthereumChainParameter['nativeCurrency']
//   blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
// }

function isExtendedChainInformation(
  chainInformation
) {
  return !!(chainInformation).nativeCurrency
}

export function getAddChainParameters(chainId) {

  console.log('test connect');

  const chainInformation = CHAINS[chainId]
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    }
  } else {
    console.log('test connect2');

    return chainId
  }
}

export const CHAINS = {
  1: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://mainnet.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      process.env.REACT_APP_alchemyKey ? `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_alchemyKey}` : undefined,
      'https://cloudflare-eth.com',
    ].filter((url) => url !== undefined),
    name: 'Mainnet',
  },
  3: {
    urls: [process.env.REACT_APP_infuraKey ? `https://ropsten.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Ropsten',
  },
  4: {
    urls: [process.env.REACT_APP_infuraKey ? `https://rinkeby.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Rinkeby',
  },
  5: {
    urls: [process.env.REACT_APP_infuraKey ? `https://goerli.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Görli',
  },
  42: {
    urls: [process.env.REACT_APP_infuraKey ? `https://kovan.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Kovan',
  },
  // Optimism
  10: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://optimism-mainnet.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      'https://mainnet.optimism.io',
    ].filter((url) => url !== undefined),
    name: 'Optimistic Ethereum',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  69: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://optimism-kovan.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      'https://kovan.optimism.io',
    ].filter((url) => url !== undefined),
    name: 'Optimistic Kovan',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
  },
  // Arbitrum
  42161: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://arbitrum-mainnet.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      'https://arb1.arbitrum.io/rpc',
    ].filter((url) => url !== undefined),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  421611: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://arbitrum-rinkeby.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      'https://rinkeby.arbitrum.io/rpc',
    ].filter((url) => url !== undefined),
    name: 'Arbitrum Testnet',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.arbiscan.io'],
  },
  // Polygon
  137: {
    urls: [
      process.env.REACT_APP_infuraKey ? `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined,
      'https://polygon-rpc.com',
    ].filter((url) => url !== undefined),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  80001: {
    urls: [process.env.REACT_APP_infuraKey ? `https://polygon-mumbai.infura.io/v3/${process.env.REACT_APP_infuraKey}` : undefined].filter(
      (url) => url !== undefined
    ),
    name: 'Polygon Mumbai',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  },
}

export const URLS = Object.keys(CHAINS).reduce(
  (accumulator, chainId) => {
    const validURLs = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs
    }

    return accumulator
  },
  {}
)
