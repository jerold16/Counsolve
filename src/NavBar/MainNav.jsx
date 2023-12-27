import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
const MainNav = () => {
  
  const [show, setShow] = useState(false);
  const [navshow,setnav]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate =useNavigate()
  
  return (
    <div className={`border-none clr`}>
         <Navbar key='lg' expand="lg" className="transi bg-body-tertiary my-3">
          <Container fluid>
            <div className=' lg:w-1/2'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={()=>setnav(true)}
            className='shadow-none border-0' />
            <Navbar.Offcanvas
              show={navshow}
              onHide={()=>setnav(false)}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className="trans"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <div className='mx-auto mx-sm-0'>
                <img src="../assest/comlogowhite.png" alt="logo" />
             </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="px-5 fw-semibold justify-content-start justify-content-between  flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{navigate("/");setnav(false) }} className='display-2'>Home</Nav.Link>
                  <Nav.Link><div className="drpdown">
   <button className="drpbtn">About</button>
  <div className="drpdown-content transi">
    <Nav.Link onClick={()=>{navigate("/about");setnav(false) }} className='text-decoration-none text-slate-600'>About Us</Nav.Link>
    <Nav.Link onClick={()=>{navigate("/ourteam");setnav(false) }} className='text-decoration-none text-slate-600' >Our Team</Nav.Link>
  </div>
</div></Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/service");setnav(false) }} className=''>Services</Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/project");setnav(false) }} className=''>Projects</Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/blogs");setnav(false) }} className=''>Blog</Nav.Link>
                  <Nav.Link onClick={()=>{navigate("/contact");setnav(false) }}>Contact</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            </div>
            <div className='d-flex lg:mx-10 '>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <button className='mx-2 bg-inherit'  onClick={handleShow}>
                <img src={require("../assest/navicon.png")} alt="Awesome Image"/>
                 </button>
            </div>
          </Container>
          {/* Logo off canvas */}
      <Offcanvas show={show} 
      onHide={handleClose}
     
      className="p-4 lg:w-2/5 trans bg-white text-black">
        <Offcanvas.Header closeButton className=''>
          <Offcanvas.Title>
          <div className='mx-auto mx-sm-0'>
             <img src="../assest/logo.png" alt="logo"/>
             </div>
          </Offcanvas.Title>
          </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar>
    </div>
  )
}

export default MainNav