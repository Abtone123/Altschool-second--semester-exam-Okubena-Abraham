import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ErrorBoundary } from "react-error-boundary";
import "./MyErrorBoundary"
import MyErrorBoundary from "./MyErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary fallback={<h1>Ooppppsss....Something went wrong with the App</h1>}> */}
      <MyErrorBoundary><App /></MyErrorBoundary>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
