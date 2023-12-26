import { KeyboardArrowRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import { Card, Container } from 'react-bootstrap'
import Slider from 'react-slick'

const OurTeam = () => {
  var settings = {
    dots: false,
    speed: 500,
    arrows : false,
    slidesToShow: 3,
    initialSlide: 0,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    pauseOnHover: false,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
            Our Team</p>
            <p 
         className='position-absolute text-white text-xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-end  justify-start p-5'>
            <a onClick={()=>navigate("/")} className='cursor-pointer no-underline text-white hover:underline'>Home</a> 
            <KeyboardArrowRight/> Our Team</p>
    </div>
    <Container className='mx-auto my-20'>
      <p className='text-clr fw-semibold ms-3'>LEADERSHIP</p>
      <p className='text-5xl fw-semibold'>Team Behind Company</p>
       <Slider {...settings} className='my-10'>
       <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" className='zoomin' width={100} src="../assest/team-3.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Hermoni </Card.Title>
        <Card.Text> 
          Some quick example text to build on the card title and make up the  bulk of the card's content. 
                            <span className='cursor-pointer text-black fw-semibold'> Read more</span>
         
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-1.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-2.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{width : '18rem'}} className='rounded-3xl'>
      <Card.Img variant="top" width={100} src="../assest/team-1.jpg" />
      <Card.Body className='w-10/12'>
        <Card.Title className='hover:text-violet-700 transi cursor-pointer'>Herman Gardon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <span className='cursor-pointer text-black fw-semibold'> Read more</span>
        </Card.Text>

      </Card.Body>
    </Card>
       </Slider>

      <p className='text-lg transi hover:text-violet-700 text-center cursor-pointer'>View All Members <KeyboardArrowRight/> </p>
    </Container>
    <BeliveUs/>
</div>

  )
}

export default OurTeam