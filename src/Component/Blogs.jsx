import { KeyboardArrowRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'

const Blogs = () => {
    let navigate=useNavigate()
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <div id='head' className='position-relative transi'>
            <div id="servicetitle" className='d-block' alt="" ></div>
             <p style={{backgroundColor :"rgba(0,0,0,0.5)"}} 
             className='position-absolute text-white text-5xl md:text-7xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-center  justify-center'>
                Blogs</p>
                <p 
             className='position-absolute text-white text-xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-end  justify-start p-5'>
                <a onClick={()=>navigate("/")} className='cursor-pointer no-underline text-white hover:underline'>Home</a> 
                <KeyboardArrowRight/> Blogs</p>
        </div>
        {/* Grid View */}
        {/* Belive us */}
       <BeliveUs/>
       
    </div>
  )
}

export default Blogs