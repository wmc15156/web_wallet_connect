import { hooks, metaMask } from '../../connectors/metaMask';
import { Accounts } from '../Account';
import { Card } from '../Card';
import { Chain } from '../Chain';
import { ConnectWithSelect } from '../ConnectWithSelect';
import { Status } from '../Status';
import { useEffect, useState } from 'react';

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function MetaMaskCard() {
  const [isPolygonNetwork, setIsPolygonNetwork] = useState(false);

  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  useEffect(() => {
    console.log(chainId, isActive);
    if (isActive) {
      if (chainId === 137) {
        setIsPolygonNetwork(true);
      } else {
        setIsPolygonNetwork(false);
      }
    }
  }, [chainId, isActive]);

  useEffect(() => {
    console.log('1234', isActive)
    const isConnected = JSON.parse(localStorage?.getItem('isWalletConnected'));
    if (!isConnected) {
      metaMask.deactivate();
    }
  },[isActive])
  console.log(isActive, 'isActive');
  return (
    <>
      <h4 style={{ background: '#fab005', color: '#fff' }}>
        {isActive && !isPolygonNetwork && (
          <div>
            Your wallet is connected to the wrong network. To use Polygon Network, please switch the
            network.
          </div>
        )}
      </h4>
      <div>
        <Card>
          <div>
            <b>MetaMask</b>
            <Status isActivating={isActivating} error={error} isActive={isActive} />
            <div style={{ marginBottom: '1rem' }} />
            <Chain chainId={chainId} />
            <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
          </div>
          <div style={{ marginBottom: '1rem' }} />
          <ConnectWithSelect
            connector={metaMask}
            chainId={chainId}
            isActivating={isActivating}
            error={error}
            isActive={isActive}
          />
        </Card>
      </div>
    </>
  );
}
