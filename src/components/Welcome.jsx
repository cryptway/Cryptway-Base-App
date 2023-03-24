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
    <div className="flex-1 flex justify-start     items-center flex-col w-full p-5">
    <div className="mt-10 w-full flex justify-center">
      <div className="relative  mt-8 shadow-xl md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex  items-center p-10">
        <div className="flex justify-center items-center flex-col w-full min-h-full">
          <img src={svg} className="w-64" />
          <h1 className="text-white font-poppins font-black text-3xl tracking-wide">Welcome </h1>
  </div>
 </div>
 </div>
        <div className="blue_gradient" />
      </div>
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
