import React, { useContext } from "react";   
  import gif from "../../../images/Success.gif" 
const Success = () => { 

  return (


    <div className="flex pt-[100px] justify-center items-center flex-col w-full min-h-full">
<img src={gif} width="200px" alt="" />
    <h1 className="text-white font-poppins font-black text-3xl tracking-wide">SuccessFullY Transfered </h1>
    <p className="text-gray-400	 font-poppins font-medium mt-3 text-base">Your Request for Transfering Eth is Successfully Completed .</p> 

</div> 
   
  
       
  );
};

export default Success;
