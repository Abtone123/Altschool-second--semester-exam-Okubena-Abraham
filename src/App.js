import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCounter from "./MyCounter";
// import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<MyCounter />} />
          {/* <Route exact path="/error" element={<ErrorBoundary />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* Use "*" to match all paths for 404 */}
        </Routes>
      </Router>
    
  );
};

export default App;
