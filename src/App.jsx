import React from 'react'
import "./index.css"
  import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import 'animate.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
           <Routes>
               <Route path='/' element={<LandingPage/>}></Route>
           </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App