import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Fund,
  Thank,
  Success,
  Faucet,
  Send,
  Receive,
  Welcome,
  Footer,
  NotFound,
} from "./components";
import LoadingScreen from "./components/LoadingScreen";
import React, { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div class="bg-[#202124] w-full min-h-screen">
 
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/send" element={<Send />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/thanks" element={<Thank />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

function Swap() {
  window.location.replace("https://swap.cryptway.in/");
  return null;
}
function Currencies() {
  window.location.replace("https://cryptwaycurrencies.netlify.app/");
  return null;
}

export default App;
