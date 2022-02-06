import logo from './logo.svg';
import './App.css';

import PriorityExample from '../src/components/connectors/PriorityExample';
import MetaMaskCard from '../src/components/connectors/MetaMaskCard';
import {useEffect, useState} from "react";

function App() {

    const [currentAccount, setCurrentAccount] = useState(null);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Make sure you have Metamask installed');
        } else {
            console.log("Wallet exists! We're ready to go!");
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log('Found an authorized: ', account);
                setCurrentAccount(account);
            } else {
                console.log('No authorized account found');
            }
        } catch (err) {
            window.location.href = 'https://metamask.io/';
        }
    };

    useEffect(() => {
        checkWalletIsConnected();
    }, []);


    return (
    <div>
      <PriorityExample />
      <div>
        <MetaMaskCard />
      </div>
    </div>
  );
}

export default App;
