import React, { useState } from 'react'
import "../Component/NavBar/nav.css"
import "./home.css"
import { Col, Image, Row } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
const Chooseus = () => {
  const [isflip,setisflip]=useState(false)
  const [isflipcard2,setisflipcard2]=useState(false)
  const [isflipcard3,setisflipcard3]=useState(false)
  const [isflipcard4,setisflipcard4]=useState(false)
  const [isflipcard5,setisflipcard5]=useState(false)
  const [isflipcard6,setisflipcard6]=useState(false)
  return (
    <div className='mt-10'>
        <p className='h-10'></p>
        <p className='text-center text-violet-700 fw-bold' >WHY CHOOSE US</p>
        <p className='text-center md:text-5xl p-3 text-4xl  fw-medium text-black'>Reason For Choose Counsolve</p>
           <article className="p-3 d-flex flex-column flex-lg-row  container">
           {/* Card section 1 */}
           <Row className='d-flex flex-column justify-center align-items-center p-4 '>
           <Col sm={7} md={9} lg={12}
           onMouseEnter={()=>setisflip(true)}
           onMouseLeave={()=>setisflip(false)}
            id='cardchange'
            style={{backgroundColor : isflip? "rgb(39,46,57)" : "rgb(226,232,240)",
                   color: isflip? "whitesmoke": "black" }}
            className='themc position-relative lg:left-16 border flex rounded-s-3xl my-4
             bg-slate-200'>
            <div className=' py-4  ps-2 md:p-6'>
            <ReactCardFlip flipDirection='vertical' isFlipped={isflip}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div style={{backgroundColor : isflip? "rgb(204,92,129)" : "rgb(81,55,133)" }}
                className='w-6 h-6 transi rounded-ss-3xl bg-violet-800'></div>
               <div style={{backgroundColor : isflip? "rgb(246,101,135)" : "rgb(108,78,167)" }}
               className='p-2 h-24 pt-4 transi
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/clock.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={12}
            onMouseEnter={()=>setisflipcard2(true)}
            onMouseLeave={()=>setisflipcard2(false)}
            className='my-4 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 ps-2 md:p-6 '>
              <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard2}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div className='w-6 h-6 rounded-ss-3xl bg-violet-800'
               ></div>
               <div className='p-2 h-24 pt-4
                rounded-es-3xl rounded-tr-3xl bg-violet-600 text-white'>
                    <img src={require("../assest/united.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={12}  className='my-4 position-relative lg:left-16 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 ps-2 md:p-6 '> <ReactCardFlip flipDirection='vertical' isFlipped={isflipcard3}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div className='w-6 h-6 rounded-ss-3xl bg-violet-800'></div>
               <div className='p-2 h-24 pt-4
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/personal-computer.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
           </Row>
            
            {/* Image round */}
            <div id='experience' className='lg:w-1/2 d-flex align-items-center justify-content-center  mx-10 my-2'>
                    <Image src={require(`../assest/chooseus-1.jpg`)}></Image>
                 </div>
            {/* Card section 2  */}
            <Row className='d-flex p-4 sm:p-0 align-items-center flex-column'>
            <Col sm={7} md={9} lg={12} className='position-relative lg:right-20 border flex rounded-s-3xl my-4 bg-slate-200'>
            <div className='py-4 ps-2 md:p-6 '><ReactCardFlip flipDirection='vertical' isFlipped={isflip}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div className='w-6 h-6 rounded-ss-3xl bg-violet-800'></div>
               <div className='p-2 h-24 pt-4
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/risk-management.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={12} className='my-4 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 ps-2 md:p-6 '><ReactCardFlip flipDirection='vertical' isFlipped={isflip}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div className='w-6 h-6 rounded-ss-3xl bg-violet-800'></div>
               <div className='p-2 h-24 pt-4
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/advice.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
            <Col sm={7} md={9} lg={12}  className='my-4 position-relative lg:right-20 border flex rounded-s-3xl bg-slate-200'>
            <div className='py-4 ps-2 md:p-6 '><ReactCardFlip flipDirection='vertical' isFlipped={isflip}>
              <div className='thefrontcard'>
                
              <p className='fw-bold'>well Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              <div className='thebackcard' >
                
              <p className=' fw-bold'>hellow Knowledge</p> 
                 <p>Foresee the pain trouble all that  rationanl encounter</p>
              </div>
              </ReactCardFlip>
            </div>
           {/* Flag creation */}
           <div className='d-flex  position-relative bottom-6 left-7'>
               <div className='w-6 h-6 rounded-ss-3xl bg-violet-800'></div>
               <div className='p-2 h-24 pt-4
                rounded-es-3xl rounded-tr-3xl violetclr text-white'>
                    <img src={require("../assest/book.png")} className='' width={75} alt="" />
              </div>
           </div>
            </Col>
           </Row>
           </article>
         
     
          
    </div>
  )
}

export default Chooseus