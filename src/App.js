import logo from "./logo.svg";
import "./App.css";
import { ethers, getDefaultProvider } from "ethers";

import PriorityExample from "../src/components/connectors/PriorityExample";
import MetaMaskCard from "../src/components/connectors/MetaMaskCard";
import { useCallback, useEffect, useState } from "react";
import ABI from "./lib/abi/contract.json";
import Web3 from "web3";
import { convertEthToWei } from "./lib/convert";
import AvastarToken from "./space_punks_token";
import axios from "axios";
import Header from "./components/Header";
import SectionOne from "./components/section/sectionOne";
import SectionTwo from "./components/section/sectionTwo";
import SectionThree from "./components/section/sectionThree";
import SectionFour from "./components/section/sectionFour";
import SectionFive from "./components/section/sectionFive";
import SectionSix from "./components/section/SectionSix";
import SectionSeven from "./components/section/ SectionSeven";
import SectionEight from "./components/section/SectionEight";
import SectionNine from "./components/section/sectionNine";
import Footer from "./components/Footer";

function App() {
  const [inputAddress, setInputAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [allowance, setAllowance] = useState(null);
  const [nftImages, setNftImages] = useState([]);

  const [loading, setLoading] = useState(false);

  // const result = createContractInstance();
  // console.log(result);

  const [coinCount, setCoinCount] = useState("");

  // const nftContract = new web3.eth.Contract(ABI, address);
  const { ethereum } = window;
  const web3 = new Web3(window.ethereum);

  const getNftListImages = async () => {
    const contract = new web3.eth.Contract(
      AvastarToken,
      "0xF3E778F839934fC819cFA1040AabaCeCBA01e049"
    );
    const balance = await contract.methods.balanceOf(inputAddress).call();
    console.log(balance);

    let images = [];
    setLoading(true);
    for (let i = 0; i < balance; i++) {
      const tokenId = await contract.methods
        .tokenOfOwnerByIndex(inputAddress, i)
        .call();
      console.log(tokenId, "tokenId");
      const tokenMetadataURI = await contract.methods.tokenURI(tokenId).call();
      // console.log(tokenMetadataURI);
      const metadataImage = await axios.get(tokenMetadataURI).then((resp) => {
        return resp.data.image;
      });

      images.push(metadataImage);
    }
    setLoading(false);

    setNftImages(images);
  };

  const bootstrap = async () => {
    const providerUrl =
      process.env.PROVIDER_URL ||
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

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
      try {
        const balance = await contract.allowance(
          currentAccount,
          currentAccount
        );
        setAllowance(balance);
      } catch (err) {
        console.log(err, "approve aerror");
      }
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

  useEffect(() => {}, []);

  return (
    <main>
      <div id="contents">
        <Header />
        <article>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
          <SectionNine />
        </article>
        <Footer />
      </div>
    </main>
  );
}

export default App;

// <div>
//   <PriorityExample />
//   <div>
//     <MetaMaskCard />
//   </div>
//
//   <div
//       style={{
//         width: "500px",
//         border: "2px gray solid",
//         height: "500px",
//         margin: "0 auto",
//         marginTop: "30px",
//         borderRadius: "8px",
//       }}
//   >
//     <h3 style={{ textAlign: "center" }}>contract test</h3>
//     <div style={{ margin: "20px 0 0 30px" }}>
//       <input
//           type="text"
//           onChange={(e) => {
//             setCoinCount(e.target.value);
//           }}
//           value={coinCount}
//           placeholder="approve 수량"
//       />
//       <button onClick={onClickApprove}>approve</button>
//
//       <div style={{ margin: "20px 0 0 30px" }}>
//         {allowance && <div>{allowance._hex}</div>}
//       </div>
//     </div>
//
//     <div style={{ marginTop: "20px", padding: "20px" }}>
//       <hr />
//
//       <h3 style={{ textAlign: "center" }}> get nft item lists test </h3>
//       <span>test address: 0x9956923aa07796d66d5d88d185d92f8b84a17cae</span>
//       <div style={{ marginTop: "30px" }}>
//         <input
//             type="text"
//             value={inputAddress}
//             placeholder="address"
//             onChange={(e) => {
//               setInputAddress(e.target.value);
//             }}
//         />
//         <button onClick={getNftListImages}>submit</button>
//       </div>
//
//       <div style={{ marginTop: "30px" }}>
//         {loading && <span>loading......</span>}
//         {nftImages.map((image, i) => (
//             <img
//                 src={image}
//                 alt=""
//                 key={i}
//                 style={{ display: "block", width: "100px" }}
//             />
//         ))}
//       </div>
//
//       <div style={{ marginTop: "30px", fontSize: "12px" }}>
//         contract address: 0xF3E778F839934fC819cFA1040AabaCeCBA01e049
//       </div>
//     </div>
//   </div>
// </div>
