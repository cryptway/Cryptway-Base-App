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
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/send" element={<Send />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/thanks" element={<Thank />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Swap() {
  window.location.replace("https://cryptwayswap.netlify.app/");
  return null;
}

export default App;
