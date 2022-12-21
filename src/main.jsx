import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import {FundsProvider } from "./context/FundContext";
import "./index.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <FundsProvider> 
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
  </FundsProvider>,
  document.getElementById("root"),
);
serviceWorkerRegistration.register();
