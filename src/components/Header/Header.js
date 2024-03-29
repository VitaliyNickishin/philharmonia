import React from 'react'
import logo from '../../logo.png'
import {Container} from 'react-bootstrap'
import SocialIcons from '../SocialIcons/SocialIcons'
// import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Navbar from '../Navbar/Navbar'
import './Header.sass'

export default function Header() {
 return (
  <header className="header" id="header">
   <Container>
    <div className="header-top">
     <div className="logo">
      <img src={logo} alt="logo"/>
     </div>
      {/* <Logo/> */}
     <div className="date header-top__begining">
      <p>2017</p>
      <span>season</span>
     </div>

     <div className="date header-top__finish">
      <p className="end">2018</p>
      <span className="end">season</span>
     </div>

     <div className="text header-top__text">
      <p>Sydney philharmonia choirs  
       <span> celebrating 100 years in 2020</span>
      </p>
     </div>

     <div className="right-info header-top__right-info">
      <a href="#shop" className="right-info__text">
       shop/<br/>cart
      </a>
      <div className="right-info__icons">
       <SocialIcons />
       <Search />
      </div>
       <a href="#donaete" className="right-info__donate">
        <p>donate</p>
       </a>
     </div>

    </div>{/* header-top */}
    <Navbar/>
   </Container>
  </header>
 )
}
