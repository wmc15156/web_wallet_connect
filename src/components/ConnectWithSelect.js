
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';
import {useCallback, useEffect, useState} from 'react';
import { CHAINS, getAddChainParameters, URLS } from '../chains';

function Select({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}) {
  return (
    <select
      value={chainId}
      onChange={(event) => {
        switchChain?.(Number(event.target.value));
      }}
      disabled={switchChain === undefined}
    >
      {displayDefault ? <option value={-1}>Default Chain</option> : null}
      {chainIds.map((chainId) => (
        <option key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </option>
      ))}
    </select>
  );
}

export function ConnectWithSelect({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}) {
  const isNetwork = connector instanceof Network;
  const displayDefault = !isNetwork;
  const chainIds = (isNetwork ? Object.keys(URLS) : Object.keys(CHAINS)).map((chainId) =>
    Number(chainId)
  );


  const disconnectWallet = () => {
      localStorage.setItem('isWalletConnected', "false")
      connector.deactivate();
  }
  const walletConnect = async () => {
      await connector.activate(
          desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId)
      ).then(() => {
          localStorage.setItem('isWalletConnected', "true")
      })
  }

  const walletConnect2 = async () => {
      await connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(() => {
          localStorage.setItem('isWalletConnected', "true")
      })
  }


  const [desiredChainId, setDesiredChainId] = useState(isNetwork ? 1 : -1);

    const switchChain = useCallback(
    async (desiredChainId) => {
      setDesiredChainId(desiredChainId);
      // if we're already connected to the desired chain, return
      if (desiredChainId === chainId) return;
      // if they want to connect to the default chain and we're already connected, return
      if (desiredChainId === -1 && chainId !== undefined) return;

      if (connector instanceof WalletConnect || connector instanceof Network) {
        await walletConnect2();
      } else {
        await walletConnect();
      }
    },
    [connector, chainId]
  );



  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Select
          chainId={desiredChainId}
          switchChain={switchChain}
          displayDefault={displayDefault}
          chainIds={chainIds}
        />
        <div style={{ marginBottom: '1rem' }} />
        <button
          onClick={() =>
            connector instanceof WalletConnect || connector instanceof Network
              ? connector.activate(desiredChainId === -1 ? undefined : desiredChainId)
              : connector.activate(
                  desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId)
                )
          }
        >
          Try Again?
        </button>
      </div>
    );
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/*<Select*/}
        {/*  chainId={desiredChainId === -1 ? -1 : chainId}*/}
        {/*  switchChain={switchChain}*/}
        {/*  displayDefault={displayDefault}*/}
        {/*  chainIds={chainIds}*/}
        {/*/>*/}
        <div style={{ marginBottom: '1rem' }} />
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button
          onClick={
            isActivating
              ? undefined
              : () =>
                  connector instanceof WalletConnect || connector instanceof Network
                    ? walletConnect2()
                    : walletConnect()
          }
          disabled={isActivating}
        >
          Connect
        </button>
      </div>
    );
  }
}
