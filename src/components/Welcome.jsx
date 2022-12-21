import React, { useContext } from "react"; 
import gif from "../../images/illustratation.gif"; 
import swap from "../../images/swap.png"; 
import send from "../../images/send.png"; 
import fundico from "../../images/fund-ico.png"; 
import edhub from "../../images/edhub.png"; 
import faucet from "../../images/faucet.png"; 
import recieve from "../../images/wallet.png"; 
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";  
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

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;

    e.preventDefault();

    if (!addressTo || !amount ) return;

    sendTransaction();
  };

  return (
    <div className="flex-1 flex justify-start   items-center flex-col w-full p-5">
    <h1 className="text-white font-poppins font-black text-5xl tracking-wide">Cryptway App</h1>
    {!currentAccount && (<p className="text-gray-400	 font-poppins font-medium mt-3 text-base">  Connect wallet to experience the magic               </p>)} 
    <div className="mt-10 w-full flex justify-center">
      <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex  items-center p-10">
          <div className="flex justify-center items-center flex-col w-full min-h-full">
          
 {!currentAccount && ( 
   <img src={gif} className="w-56 h-56 object-contain rounded-xl	mb-5" />  )}
     {!currentAccount && ( 
  <p className="font-poppins font-normal text-white text-lg text-center mt-10">  Please connect your wallet </p> 
        
)}
     {!currentAccount && ( 
            <button
              type="button"
              onClick={connectWallet}
              className="flex px-6 py-2   flex-row justify-center items-center my-5 bg-[#eb056d]  p-3 rounded-3xl  cursor-pointer hover:bg-[#119694]"
            >
              <p className="font-poppins font-bold text-lg text-white">
                Connect Wallet
              </p>
            </button>
            )}

             {currentAccount && ( 

<img src={gif} className="w-56 h-56 object-contain rounded-xl	mb-5" />  )}
{currentAccount && ( 
  <div> 
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <Link to="/receive"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-tl-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  
                  <img src={recieve}  className="w-16 h-16 object-contain" />  

            </button></Link>
            <Link to="/send"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"> 
            <img src={send}  className="w-16 h-16 object-contain"/>
            </button></Link>
            <Link to="/swap"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-tr-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <img src={swap} className="w-16 h-16 object-contain" />

        </button></Link>
         
        </div>
<br></br>
        <div class="inline-flex rounded-md shadow-sm" role="group">
              <Link to="/fund"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-bl-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  
                  <img src={fundico}  className="w-16 h-16 object-contain" />  

            </button></Link>
            <Link to="/faucet"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"> 
            <img src={faucet}  className="w-16 h-16 object-contain"/>
            </button></Link>
            <a href="https://cryptway.github.io/learn/"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-br-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <img src={edhub} className="w-16 h-16 object-contain" />

        </button></a>
      
        </div>
        </div> )}
 
  </div>
 </div> </div>
        <div className="blue_gradient" />
      </div>
    </div> 
  );
};

export default Welcome;
