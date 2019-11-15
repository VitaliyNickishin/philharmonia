import React from 'react'
// import logo from '../../logo.png'
import search from '../../assets/img/icons/search.png'
import {Container} from 'react-bootstrap'
import SocialIcons from '../SocialIcons/SocialIcons'
import Logo from '../Logo/Logo'
import './Header.sass'

export default function Header() {
 return (
  <header className="header">
   <Container>
    <div className="header-top">
     {/* <div className="logo">
      <img src={logo} alt="logo"/>
     </div> */}
      <Logo/>
     <div className="date header-top__begining">
      <h1>2017</h1>
      <span>season</span>
     </div>

     <div className="date header-top__finish">
      <h1 className="end">2018</h1>
      <span className="end">season</span>
     </div>

     <div className="text header-top__text">
      <p>Sydney philharmonia choirs  
       <span> celebrating 100 years in 2020</span>
      </p>
     </div>

     <div className="right-info header-top__right-info">
      <div className="right-info__text">
       shop/<br/>cart
      </div>
      <div className="right-info__icons">
       <SocialIcons />
       <button type="button">
        <img src={search} alt="search"/>
       </button>
      </div>
       <a href="#" className="right-info__donate">
        <p>donate</p>
       </a>

     </div>
     
    </div>{/* header-top */}
    
   </Container>
   


   
  </header>
 )
}
