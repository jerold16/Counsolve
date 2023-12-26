import React from 'react'
import "./index.css"
  import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import 'animate.css';
import Service from './Component/Service';
import MiniNav from './Component/NavBar/MiniNav';
import LogoNav from './Component/NavBar/LogoNav';
import MainNav from './Component/NavBar/MainNav';
import ContactLanding from './Component/ContactLanding';
import Project from './Component/Project';
import Blogs from './Component/Blogs';
import Contact from './Component/Contact';
import AboutsUS from './Component/AboutsUS';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <MiniNav/>
        <LogoNav/>
        <MainNav/>
           <Routes>
               <Route path='/*' element={<LandingPage/>}></Route>
               <Route path='/service/*' element={<Service/>}/>
               <Route path='/project/*' element={<Project/>}/>
               <Route path='/blogs/*' element={<Blogs/>}/>
               <Route path='/contact/*' element={<Contact/>}/>
               <Route path='/about/*' element={<AboutsUS/>}/>
           </Routes>
           <ContactLanding/>
      </BrowserRouter>

    </div>
  )
}

export default App