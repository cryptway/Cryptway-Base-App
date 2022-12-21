import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingScreen = () => (
  <div className="flex justify-center items-center h-screen bg-black-300">
    <FadeLoader color="#d012ed" size={100} />
  </div>
);
export default LoadingScreen;