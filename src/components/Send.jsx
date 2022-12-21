import React, { useContext } from "react"; 
import { TransactionContext } from "../context/TransactionContext"; 
import { Loader } from "."; 
import eth from "../../images/send-eth.svg";
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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

const Send = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading ,isSuccess } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;

    e.preventDefault();

    if (!addressTo || !amount ) return;

    sendTransaction();
  };

  return (
    <div className="flex-1 flex justify-start   items-center flex-col w-full p-5">
    <h1 className="text-white font-poppins font-black text-5xl tracking-wide">Cryptway Send</h1>
    <p className="text-gray-400	 font-poppins font-medium mt-3 text-base">Enter   Wallet Address</p>
    <div className="mt-10 w-full flex justify-center">
      <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex p-10">
           <div className="p-5   w-full flex flex-col justify-start items-center ">
         <img src={eth}  className="w-48" alt="" />
        <Input placeholder="Address To"  className="block w-full p-4 rounded-lg   bg-gray-700  border-black  placeholder-gray-400 text-white focus:ring-blue-500  focus:border-blue-500" name="addressTo" type="text" handleChange={handleChange} />
            <Input className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full " placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
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
              ?  window.location.replace('./success') 
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

export default Send;
