import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";

import PriorityExample from "../src/components/connectors/PriorityExample";
import MetaMaskCard from "../src/components/connectors/MetaMaskCard";
import { useCallback, useEffect, useState } from "react";
import { createContractInstance } from "./lib/Station";
import ABI from "./lib/abi/contract.json";
import web3 from "web3";
import { convertBNToString, convertEthToWei } from "./lib/convert";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [allowance, setAllowance] = useState(null);
  // const result = createContractInstance();
  // console.log(result);

  const [coinCount, setCoinCount] = useState("");

  // const nftContract = new web3.eth.Contract(ABI, address);

  const bootstrap = async () => {
    const providerUrl =
      process.env.PROVIDER_URL ||
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          "0x079DFB42dEED5BD8cA1ac7c16a82CFAcbbC3c58F",
          ABI,
          signer
        );
        setContract(contract);
        // console.log(contract.approve(currentAccount, 100000000000), "contract");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickApprove = useCallback(async () => {
    if (coinCount && contract) {
      console.log(coinCount, convertEthToWei(coinCount));
      await contract.approve(currentAccount, convertEthToWei(coinCount));
      const balance = await contract.allowance(currentAccount, currentAccount);
      setAllowance(balance);
      console.log(
        balance,
        "balance",
        web3.utils.isBN(balance._hex),
        balance._hex
      );
    }
  }, [coinCount, currentAccount, contract]);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Make sure you have Metamask installed");
    } else {
      console.log("Wallet exists! We're ready to go!");
    }
    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized: ", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      window.location.href = "https://metamask.io/";
    }
  };

  useEffect(() => {
    if (!window.chrome) {
      alert("Please use a chrome browser.");
    }
    checkWalletIsConnected();
    bootstrap();
  }, []);

  return (
    <div>
      <PriorityExample />
      <div>
        <MetaMaskCard />
      </div>

      <div
        style={{
          width: "500px",
          border: "2px gray solid",
          height: "500px",
          margin: "0 auto",
          marginTop: "30px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>contract test</h3>
        <div style={{ margin: "20px 0 0 30px" }}>
          <input
            type="text"
            onChange={(e) => {
              setCoinCount(e.target.value);
            }}
            value={coinCount}
            placeholder="approve 수량"
          />
          <button onClick={onClickApprove}>approve</button>

          <div style={{ margin: "20px 0 0 30px" }}>
            {allowance && <div>{allowance._hex}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
