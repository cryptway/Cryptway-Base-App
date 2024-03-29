import React, { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { Link } from "react-router-dom";
import swap from "../../../images/swap.png"; 
import currencies from "../../../images/currencies.png"; 
import send from "../../../images/send.png"; 
import recieve from "../../../images/wallet.png";  
import logo from "../../../images/logo.png"; 
import fund from "../../../images/fund-ico.png";
import dp from "../../../images/walletjazz.jpg";
import {shortenAddress} from "../../utils/shortenAddress";
import {SiEthereum} from 'react-icons/si'  
import Sidebar from "./sidebar";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => { 
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [showSidebar, setShowSidebar] = useState(false);

  return ( 
 <nav className="fixed  w-full justify-between">
<header class="flex items-center px-1 sm:px-6 py-0 "><div class="flex items-center flex-grow basis-0"> 
<Link to="/"  className="flex gap-2"> <img src={logo} alt="logo" className="w-8 h-8 object-contain"  />  <text className="text-white text-2xl font-semibold">CRYPTWAY</text></Link>
       </div>
    <div class="justify-end">
            
    {!currentAccount && (
                <button
                  type="button"
                  onClick={connectWallet}
                  className="flex px-6 py-[6px]  shadow-lg  flex-row justify-center items-center my-5 bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer"
                >
                  <p className=" flex gap-1 font-poppins font-bold text text-white ">
                    Connect <span className="hidden sm:block" > Wallet </span> 
                  </p>
                </button>
              )}

{currentAccount && (
  
               <div className="flex gap-4">
                
                <div className="hidden sm:block">
                    <button
                  type="button"
                  
                  className=" flex   z-50   gap-2 px-4 py-[6px] hover:border-[1px] hover:px-[15px] hover:py-[5px] shadow-lg  flex-row justify-center items-center my-5 bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer"
                >
               <SiEthereum   className="text-purple-600 border-[1px] rounded-[100%] p-[2px] border-purple-600 text-xl	" />
                  <p className="font-poppins font-bold text text-white ">
                 Goerli
                  </p>
                </button></div>

               
               
                {showSidebar ? (
                  
                  <button
                  className="flex gap-2  px-4 py-[6px] hover:border-[1px] hover:px-[15px] hover:py-[5px] shadow-lg  text-white items-center   bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer my-5 z-50"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                 <img src={dp}  className="w-6 h-6 rounded-[100%] mr-2" /> 
                          <p className="font-poppins font-bold text text-white ">
                           {shortenAddress(currentAccount)}  
                          </p>
                </button>
      ) : (
     <> 

        <button
        className="flex gap-2  px-4 py-[6px] hover:border-[1px] hover:px-[15px] hover:py-[5px] shadow-lg  text-white items-center   bg-[#2D2F36]  rounded-l-3xl rounded-r-3xl  cursor-pointer my-5 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
       <img src={dp}  className="w-6 h-6 rounded-[100%] mr-2" /> 
                <p className="font-poppins font-bold text text-white ">
                 {shortenAddress(currentAccount)}  
                </p>
      </button>
      </>  )}
               </div>
               
              )}

         
 
      <div
         className={`fixed side-z shadow-lg  bottom-20 right-0 bg-[#2D2F36]  rounded-l-xl p-3 grid sm:grid-cols-1   gap-4    ease-in-out duration-300 ${
           showSidebar ? "translate-x-2 " : "translate-x-full"
         }`}
       >
 <Sidebar/>
       </div>
            
 


          </div></header> 


  
          
<div class="sm:ml-8 sm:mt-8 fixed  appbar">
<div class="bg-[#2D2F36]   content-box sm:rounded-xl rounded-t-xl shadow-inner sm:p-3 p-1 grid grid-cols-5 sm:grid-cols-1    gap-4 border-[1.5px] border-[#41444F]">

 <div>
    <button type="button"  onClick={() => setShowSidebar(!showSidebar)} class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={recieve}  className="w-10 h-10 object-contain" /></button>
 </div>
 
 <div>
    <Link to="/send"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={send}  className="w-10 h-10 object-contain" /></button></Link>
 </div>

 <div>
    <Link to="/swap"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={swap}  className="w-10 h-10 object-contain" /></button></Link>
 </div>

 <div>
    <Link to="/fund"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={fund}  className="w-10 h-10 object-contain" /></button></Link>
 </div>

 <div>
    <Link to="/currencies"><button type="button" class=" p-2 rounded  hover:shadow hover:bg-[#41444F]"><img src={currencies}  className="w-10 h-10 object-contain" /></button></Link>
 </div>
  
 
</div>
</div> 


<a   href="https://github.com/orgs/cryptway/discussions" > 
<button
                type="button"
                  
                  className=" fixed gap-2 bg-purple-600  bottom-2 right-5 flex px-6 py-[6px] border-[1px] border-[#41444F] hover:px-[23px] hover:py-[5px] shadow-lg  flex-row justify-center items-center my-5  rounded-l-3xl rounded-r-3xl  cursor-pointer"
                >
                   <p className="font-poppins font-bold text text-white text-sm ">
                   Request Feature
                  </p>
                </button> </a>

    </nav>



  );
};

export default Navbar;
