import { formatEther } from '@ethersproject/units';
import { useEffect, useState } from 'react';

function useBalances(
    provider,
    accounts
) {
    const [balances, setBalances] = useState();

    useEffect(() => {
        if (provider && accounts?.length) {
            let stale = false;

            void Promise.all(accounts.map((account) => provider.getBalance(account))).then((balances) => {
                if (!stale) {
                    setBalances(balances);
                }
            });

            return () => {
                stale = true;
                setBalances(undefined);
            };
        }
    }, [provider, accounts]);

    return balances;
}

export function Accounts({
                             accounts,
                             provider,
                             ENSNames,
                         }) {
    const balances = useBalances(provider, accounts);

    if (balances) {
        console.log(formatEther(balances?.[0]), 'balances', balances);
    }

    console.log(accounts);

    if (accounts === undefined) return null;

    return (
        <div>
            <div style={{ marginTop: '20px' }}>
                Accounts:{' '}
                <b>
                    {accounts.length === 0
                        ? 'None'
                        : accounts?.map((account, i) => (
                            <span
                                key={account}
                                style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >
                  {ENSNames?.[i] ?? account.slice(0, 10) + '...'}
                                {/*{balances?.[i] ? ` (balances: ${formatEther(balances[i])})` : null}*/}
                </span>
                        ))}
                </b>
            </div>

            <div style={{ marginTop: '20px' }}>
                Balances:{' '}
                <b>
                    {accounts.length === 0
                        ? 'None'
                        : accounts?.map((account, i) => (
                            <span
                                key={account}
                                style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >
                  {balances?.[i] ? `${formatEther(balances[i])}` : null}
                </span>
                        ))}
                </b>
            </div>
        </div>
    );
}
