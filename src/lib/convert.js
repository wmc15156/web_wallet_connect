import web3 from "web3";
const BN = web3.utils.BN;

export const convertEthToWei = (ether) => {
  return web3.utils.toWei(ether, "ether");
};

export const convertBNToString = (bn) => {
  return new BN(bn).toString();
};
