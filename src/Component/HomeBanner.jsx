import React from 'react'
import { Carousel, Col, Image, Row } from 'react-bootstrap'
import "./home.css"
import MainNav from '../NavBar/MainNav'
import { useNavigate } from 'react-router'
const HomeBanner = () => {
  let navigate=useNavigate()
  return (
    <div>
        <Carousel fade className='z-0'>
      <Carousel.Item interval={1000}
       id="crsimg">
        {/* <img src={require(`../assest/banner-1.jpg`)}
        id="crsimg"
        alt="" /> */}
        <Carousel.Caption>
        <div className='md:w-3/5 lg:w-1/2  text-white'>
                <p className='text-3xl md:text-7xl fw-bold'>Showing <span className='block-color'> You the way </span> of Success </p>
                <p className='text-xl md:text-2xl'>
                    The moment so blinded by desire ,that they cannot forsee and trouble
                    that are bound to ensure</p>
                <button id='three-rounded' onClick={()=>navigate("/service")} className='fs-5 float-right btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}
       id="crsimg2">
      {/* <img src={require(`../assest/banner-2.jpg`)}
      id="crsimg"
      className='background' alt="" /> */}
        <Carousel.Caption className=''> 
        <div className='md:w-3/5 lg:w-1/2 text-black'>
                <p className='text-2xl md:text-7xl fw-bold'>Business <span className='block-color2'> & Individual </span> Consulting!... </p>
                <p className='text-xl md:text-2xl'>
                    On the other hand, we denounce with righteous indignation and
                    dislike men who are so beguiled & demoralized</p>
                <button id='three-rounded' className='fs-5 text-white float-right btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}
      className='' id="crsimg3">
      {/* <img src={require(`../assest/banner-3.jpg`)} 
      id="crsimg"
      alt="" /> */}
        
        <Carousel.Caption className=''> 
        <div className=' md:w-3/5 lg:w-1/2 text-white'>
                <p className='text-2xl md:text-7xl fw-bold'>Ideas for <span className='block-color'> your Better  </span>Investment </p>
                <p className='text-xl md:text-2xl'>The moment, so blinded by desire,that they cannot 
                forsee and trouble that are bound to ensure </p>
                <button id='three-rounded' className='px-4 float-right btn-change d-none d-md-block fw-semibold h-14 w-44 bg-violet-700'>
      Service & plans
       </button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    {/* Adout us */}
    <div id='experiencepage' className='my-3 container d-flex flex-col flex-lg-row'>
    <div id='experience' className='lg:w-1/2 mx-auto my-2'>
                    <Image src={require(`../assest/about-1.jpg`)}></Image>
                 </div>
         <div id='aboutus' className='lg:w-1/2 fontfam'>
            <p className='fs-5 text-violet-700 fw-semibold'>About us</p>
             <p className='fw-semibold w-4/5 text-xl lg:text-5xl fontfam line display-5 '>
             Experts in Providing Investment Consulting Services
             </p>
             <p className='fs-5 d-flex align-items-center fw-bold '> 
             <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              Investment Strategy Development  </p> 
             <p className='fs-5 d-flex align-items-center fw-bold'>
             <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> Risk Management</p>
            
             <p className='text-lg mulish text-slate-500'>
             Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the 
             claims of duty obligations of business it will frequently occur that.
             </p>
       
        <button id='three-rounded' onClick={()=>navigate("/about")} className='fx-4 text-white btn-change d-none d-md-block fw-semibold h-14 w-48 bg-violet-700'>
      More About Us
       </button> 
     </div>

    </div>
    {/* About ending */}
    <video src=""></video>
   </div>
  )
}

export default HomeBanner