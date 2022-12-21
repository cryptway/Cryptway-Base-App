import React, { useContext } from "react"; 
import { FundContext } from "../../context/FundContext"; 
import fund  from "../../../images/coin.gif"; 
import { Loader } from ".."; 
import { Thanks } from ".."; 
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
    <div className="flex-1 flex justify-start   items-center flex-col w-full p-5">
    <h1 className="text-white font-poppins font-black text-5xl tracking-wide">Fund</h1>
    <p className="text-gray-400	 font-poppins font-medium mt-3 text-base">Want to Help other Developer's make a donation to Cryptway Faucet</p>
    <div className="mt-10 w-full flex justify-center">
      <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex p-10"> 
        <div className="p-5   w-full flex flex-col justify-start items-center "> 
    <img src={fund} className="w-48 h-48" />
 Enter Your Amount Below 👀 
          <Input className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full " placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
           {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )} 

              {isSuccess
              ? <Thanks />
              : (
                <></>
              )}
       </div>
        </div>
        </div>
        <div className="blue_gradient" />
      </div>
    </div> 
     );
};
export default Fund;
