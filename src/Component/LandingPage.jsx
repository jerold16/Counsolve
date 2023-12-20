import React from 'react'
import MiniNav from './NavBar/MiniNav'
import LogoNav from './NavBar/LogoNav'
import MainNav from './NavBar/MainNav'
import 'animate.css';
import "../Component/NavBar/nav.css"
import "../Component/home.css"
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import HomeBanner from './HomeBanner';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import Body1 from './Body1';
import Chooseus from './Chooseus';
const LandingPage = () => {
  
  return (
    <section id="home">
        <MiniNav/>
        <LogoNav/>
        <MainNav/>
      <HomeBanner/>
      <Body1></Body1>
       <Chooseus/>
    </section>
  )
}

export default LandingPage