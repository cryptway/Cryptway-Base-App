import React, { useContext } from "react";   
  import thank from "../../../images/thank-you.svg"
const Thank = () => { 
 return (
    
  <div className="flex pt-[100px] justify-center items-center flex-col w-full min-h-full">
  <img src={thank} width="200px" alt="" />
      <h1 className="text-white font-poppins font-black text-3xl tracking-wide">Thank You </h1>
      
  </div> 
           );
};

export default Thank;
