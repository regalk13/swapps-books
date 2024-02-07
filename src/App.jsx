// import { useState } from 'react'
import Home from "./Home.tsx";
import BookDetails from "./BookDetails.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookdetails" element={<BookDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
