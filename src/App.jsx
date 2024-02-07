// import { useState } from 'react'
import Home from "./Home.tsx";
import BookDetails from "./BookDetails.tsx";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookdetails" element={<BookDetails />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
