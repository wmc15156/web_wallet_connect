import Web3 from "web3";

import ABI from "./abi/contract.json";

const address = "0x079DFB42dEED5BD8cA1ac7c16a82CFAcbbC3c58F";

export const createContractInstance = () => {
  return new Web3.eth.Contract(ABI, address);
};
