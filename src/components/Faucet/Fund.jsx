import React, { useContext } from "react"; 
import { FundContext } from "../../context/FundContext"; 
import fund  from "../../../images/coin.gif"; 
import { Loader } from ".."; 
import { Thanks } from ".."; 

import { BsArrowDownShort } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"i
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Fund = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading , isSuccess } = useContext(FundContext);
  const handleSubmit = (e) => {
    const { amount } = formData;
    e.preventDefault();
    if (!amount ) return;
    sendTransaction();
  };

  return (
    <div className="flex-1 flex justify-start   items-center flex-col ">
     
<div className="bg-[#2D2F36] mt-20     sm:w-[30rem]   md:w-[32rem] rounded-3xl p-4 content-box">
  
  <div className="px-2 flex items-center text-white justify-between font-semibold text-xl">
    <span>Fill The Faucet </span>

  </div>

  
  <div className="bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between">
    
  <div className="p-5   w-full flex flex-col justify-start items-center "> 
  <img src={fund} className="w-16" />
 
   </div>
  
  </div>

<div className="bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between">
 

<input   className="bg-transparent mr-2 rounded h-10 placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl" placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
  
          <div className="flex w-1/4">
           
            <div className="w-full h-12 flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]">
           
              <div className="flex text-white items-center">
                 <span className="mx-2">ETH</span>
              </div>
         
      </div>
    </div>
  </div>
  
  
 

  {isLoading
        ? <Loader />
        : (
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-purple-600 my-2  w-full rounded-3xl py-2 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-black hover:border-[#234169]"  >
            Send now
          </button>
        )}

  {isSuccess
              ? <Thanks />
              : (
                <></>
              )}

</div>
<div class="sm:h-0 h-20"/>
</div>
     );
};
export default Fund;
