// import { useState } from 'react'
import Home from './Home.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
       </div>
       </Router>
    </>
  )
}

export default App
