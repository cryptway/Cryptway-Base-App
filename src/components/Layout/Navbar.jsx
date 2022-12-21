import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { Link } from "react-router-dom";
import swap from "../../../images/swap.png"; 
import send from "../../../images/send.png"; 
import recieve from "../../../images/wallet.png";  
import logo from "../../../images/logo.png"; 

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => { 
  const { currentAccount, connectWallet } = useContext(TransactionContext);
 
  return ( 
 <nav className="w-full justify-between md:py-6 md:px-14 py-6 px-4">
<header class="flex items-center px-2 py-2 border-b-1 "><div class="flex items-center flex-grow basis-0"> 
<Link to="/"> <img src={logo} alt="logo" className="w-16 h-16 object-contain"  /></Link>
       </div>
    <div class="justify-end">
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
            <div
              className="flex     flex-row justify-center items-center my-5  rounded-3xl  cursor-pointer bg-gray-900"
            >
             <div class="inline-flex" role="group"><Link to="/receive"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-3xl	 border border-gray-900 hover:bg-black hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  
                  <img src={recieve}  className="w-6 h-6 object-contain" />  

            </button></Link>
            <Link to="/send"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900  hover:bg-black hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"> 
            <img src={send}  className="w-6 h-6 object-contain"/>
            </button></Link>
            <Link to="/swap"><button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-3xl border border-gray-900  hover:bg-black hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <img src={swap} className="w-6 h-6 object-contain" />

        </button></Link>
        
        </div>
            </div>
 
          )}
          </div></header>  
    </nav>
  );
};

export default Navbar;
