import React, { useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'animate.css';
import "../NavBar/nav.css"
import "../home.css"
const MainNav = () => {
  
  const [show, setShow] = useState(false);
  const [navshow,setnav]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
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
                <img src="https://wp1.themevibrant.com/newwp/counsolve/wp-content/uploads/2023/05/logo-4.png" alt="logo" />
             </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="px-5 fw-semibold justify-content-start justify-content-between  flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='display-2'>Home</Nav.Link>
                  <Nav.Link href="#action1" className=''>About</Nav.Link>
                  <Nav.Link href="#action1" className=''>Services</Nav.Link>
                  <Nav.Link href="#action1" className=''>Projects</Nav.Link>
                  <Nav.Link href="#action1" className=''>Blog</Nav.Link>
             <Nav.Link href="#action1">Contact</Nav.Link>
                  
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
                <img src="https://wp1.themevibrant.com/newwp/counsolve/wp-content/themes/counsolve/assets/images/icons/icon-4.png" alt="Awesome Image"/>
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
             <img src="https://wp1.themevibrant.com/newwp/counsolve/wp-content/uploads/2023/05/logo.png" alt="logo"/>
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