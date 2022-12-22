import React, { useContext } from "react";  
import faucet from "../../../images/faucet.png"; 

const Faucet = () => { 
  return (
    <div className="flex-1 flex justify-start   items-center flex-col w-full p-5">
    <h1 className="text-white font-poppins font-black text-5xl tracking-wide"> Goerli Faucet</h1>
    <div className="mt-10 w-full flex justify-center">
      <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex  items-center p-10">
        <div className="flex justify-center items-center flex-col w-full min-h-full">
             <img src={faucet} className="w-48" />
        <p className="text-gray-400	 font-poppins font-medium mt-3 text-base">Currently Faucet is Empty </p>
    </div>
   </div>
        </div>
        <div className="blue_gradient" />
      </div>
    </div>
     );};
export default Faucet;
