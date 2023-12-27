import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import TitleBanner from './TitleBanner'
import { Col, Row } from 'react-bootstrap'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const Catogeries = () => {
    let navigate =useNavigate();
    let {catogery}=useParams();
    let [anime,setanime]=useState("")
    useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '2s');
        setTimeout(() => {
           setanime("") 
        }, 2000);
        console.log(anime);
      },[catogery])
    let b="business"; let ino="innovative"; let fi="financial plan";
    let i="investment"; let c="consulting"; let ma="management";
    let title = catogery[0].toUpperCase()+catogery.slice(1);
    let [datas,setdatas]=useState([])
    useEffect(()=>{
        axios.get(`http://192.168.0.122:9000/data/${catogery}`)
        .then((response)=>{
            console.log(response.data);
            setdatas(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[catogery])
  return (
    <div className={`${anime} animate__animated transi durationani `} >
          <TitleBanner data={title}/>
          <h2 className='h-20'></h2>
        <Row className='container justify-around mx-auto mb-20'>
            <Col lg={7}>
           <div className='border-2 shadow rounded-3xl p-4'>
           <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'><img className='inline mx-3' src={require("../assest/e7b9b29c4fdd4d4ec28699064fe80204.png")} alt="" />
             Investment</p>
         <div className='flex'>   
         <p className='h-fit w-fit p-2 px-4 text-3xl flex  justify-content-center align-items-center
          bg-slate-900 text-white rounded-s-3xl rounded-t-3xl m-3'>I</p>
            <p className='text-slate-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta nobis nihil accusamus! Deserunt consequatur eligendi porro totam! A error quis 
                eveniet quisquam rerum, deserunt doloremque voluptas? Iure, ex dicta?
            </p>
        </div>
            <img src={require("../assest/news-25.jpg")} alt="" />
           
            <button onClick={()=>{
                navigate("/blogs")
            }} className='hover:text-violet-600 flex gap-3 text-xl my-8 transi fw-semibold'>
                Explore More</button>
           </div>
                
            </Col>   
            <Col lg={4} className='mx-auto d-none d-lg-block mt-5'>
                <div className='bg-slate-100 shadow my-4 rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                    <p className='text-xl text-center fw-semibold my-2'>Categories</p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${b}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Business </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${c}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Consulting </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${fi}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Financial plan </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${ino}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Innovative </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${i}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Investment </p>
                    <hr />
                    <p onClick={()=>{
                        navigate(`/catogery/${ma}`)
                    }} className="hover:text-violet-600 cursor-pointer"><KeyboardArrowRight/> Management </p>
                </div>
                <div className='bg-slate-100 shadow rounded-s-3xl rounded-t-3xl p-4 mx-auto'>
                <p className='text-xl text-center fw-semibold my-2'>Popular Post</p>
                <hr />
                <div id='post1' className='cursor-pointer my-4 flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
                </div>
                <div id='post2' className='cursor-pointer flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
                </div>
                <div id='post3' className='cursor-pointer flex gap-2'>
                    <img className='w-25 h-16 bg-center ' src={require("../assest/news-25.jpg")} alt="" />
                    <div className='text-violet-700 text-lg w-[200px] mx-auto'> Business 
                    <p className='text-slate-950 transi text-lg hover:text-violet-600'>
                        Here are some tips Giving back interested in this year?</p></div>
                </div>
                    
                </div>
                {/* Giving Wings */}
                <div className='p-4 bg-violet-600 rounded-t-3xl my-4 rounded-s-3xl'>
                    <p className='text-white text-3xl '>Giving Wings to your Investment.</p>
                      <p className='text-white'>Actual teachings of the great</p>
                      <button id='three-rounded' className='px-4 text-slate-50 hover:text-blue-950  hover:bg-slate-50 transi fw-semibold p-3 bg-pink-600'>
             Get Support
       </button>
                    <img className="rounded-t-full rounded-s-full w-52 ms-auto"  src={require("../assest/news-20-310x270.jpg")} alt="" />
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Catogeries