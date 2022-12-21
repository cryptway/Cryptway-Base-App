import React, { useContext } from "react"; 
import { TransactionContext } from "../context/TransactionContext"; 
import { Address } from "../utils/shortenAddress"; 
import { QRCodeCanvas } from "qrcode.react"; 
import logo from "../../images/logo.png"; 

const Receive = () => {
  const { currentAccount} = useContext(TransactionContext);
   return (
    <div className="flex-1 flex justify-start   items-center flex-col w-full p-5">
    <h1 className="text-white font-poppins font-black text-5xl tracking-wide">Receive</h1>
    <p className="text-gray-400	 font-poppins font-medium mt-3 text-base">Your data with QR Code of Connected wallet</p>
    <div className="mt-10 w-full flex justify-center">
      <div className="relative md:max-w-[700px] md:min-w-[500px] min-w-full max-w-full gradient-border p-[2px] rounded-3xl">
        <div className="pink_gradient" />
        <div className="w-full  bg-[#1F1D2B] backdrop-blur-[4px] rounded-3xl shadow-card flex  items-center p-10">
        <div className="flex justify-center items-center flex-col w-full min-h-full">
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
   <p className="font-poppins font-normal text-white text-sm sm:text-lg text-center mt-10"> {Address(currentAccount)}</p>   
    </div>
 </div>
        </div>
        <div className="blue_gradient" />
      </div>
    </div>      
 
  );
};

export default Receive;
