import React, { useContext } from "react"; 
import { TransactionContext } from "../../context/TransactionContext"; 
import { Address } from "../../utils/shortenAddress"; 
import { QRCodeCanvas } from "qrcode.react"; 
import logo from "../../../images/logo.png"; 

 
 

const Sidebar = () => {
  const { currentAccount} = useContext(TransactionContext);
  let url = `${"https://goerli.etherscan.io/address"}/${Address(currentAccount)} `;

  return (
    
        <>
         <div className="p-3 flex justify-end  shadow-2xl items-start flex-col rounded-xl h-40 w-72  bg-gradient-to-tr from-gray-900 to-gray-700  my-5 bg-black white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-50 h-50   flex justify-center items-center">
                 
   <div className="p-[2px]  rounded-[2px] white-glassmorphism">
   <QRCodeCanvas
id="qrCode" 
size={80}
value={Address(currentAccount)} 
bgColor={"#F4C430"}
level={"H"} 
className=" "
/>  
   </div> </div> 
               <p className="text-white font-poppins font-bold text-lg mt-1">
                  CRYPTWAY
                </p>
                <img src={logo}  className="w-8 h-8" alt="" />
              </div>
              <div>
                <p className="font-poppins font-normal text-white text-[10px] text-center "> {Address(currentAccount)}</p> 
              </div>
            </div>
          </div>
        
        

          <a   href={url} > 
<button
                type="button"
                  
                  className="  px-4 py-[6px] hover:border-[1px] hover:px-[15px] hover:py-[5px] shadow-lg  text-white    w-full text-center  rounded-l-3xl rounded-r-3xl  cursor-pointer bg-purple-600  "
                >
                   <p className="font-poppins  font-bold text text-white text-sm ">
                  Transaction History
                  </p> 
                </button> </a>

        </>
       
 
  );
};

export default Sidebar;
