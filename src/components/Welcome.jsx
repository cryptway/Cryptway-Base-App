import svg from "../../images/unicorn.png"; 
import React, { useContext } from "react";
import arrow from "../../images/arrow.png"; 
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;

    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };

  return (
  <>
   <div className="flex pt-[100px] justify-center items-center flex-col w-full min-h-full">
          <img src={svg} className="w-64" />
          <h1 className="text-white font-poppins font-black text-3xl tracking-wide">Welcome </h1>
  </div>  

    {!currentAccount && (
                <div className="fixed w-[300px] top-8 right-44">
 <img src={arrow} alt="" className="w-[200px] float-right" />
<p   onClick={connectWallet} className="font-bold border-2 border-red-700 p-4 rounded-xl text-white  float-left">Click Here to connect Wallet</p>
                </div>
              )}


</>
  );
};
export default Welcome;
