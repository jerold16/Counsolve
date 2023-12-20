import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
import 'animate.css';
const LogoNav = () => {
  return (
   <div className='border-none clr'>
     <div id='top-rounded' className='d-flex bg-white pt-2'>
        <div id='left-side' className='d-flex my-3 mx-5 w-100 justify-between'>
             <div className='mx-auto mx-sm-0'>
             <img src="https://wp1.themevibrant.com/newwp/counsolve/wp-content/uploads/2023/05/logo.png" alt="logo"/>
             </div>
        <button id='three-rounded' className='fs-5 btn-change d-none d-md-block fw-semibold h-14 w-44 bg-slate-100'>
      Contact
       </button>
        </div>   
    </div>
   </div>
  )
}

export default LogoNav