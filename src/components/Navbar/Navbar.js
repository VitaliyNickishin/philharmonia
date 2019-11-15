import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import {FaAlignRight} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import './Navbar.sass'

export default class Navbar extends Component {
 state = {
  isOpen:false
 }
 handleToggle = () => {
  this.setState({isOpen:!this.state.isOpen})
 }
 render() {
  return (
   <Container>
    <nav className="navs">
     <div className="navs-center">
      <div className="navs-header">
       <button 
        type="button" 
        className="navs-btn"
        onClick={this.handleToggle}
        >
        <FaAlignRight className="navs-icon" />
       </button>
      </div>
      <ul className={this.state.isOpen ? "navs-links show-nav" : "navs-links"}>
       <li>
        {/* <Link to="/">Whats on</Link> */}
        <a href="#whatson" className="active">What's on</a>
       </li>
       <li>
        {/* <Link to="/">Support us</Link> */}
        <a href="#support">Support us</a>
       </li>
       <li>
        {/* <Link to="/">Sing with us</Link> */}
        <a href="#sing">Sing with us</a>
       </li>
       <li>
        {/* <Link to="/">About us</Link> */}
        <a href="#about">About us</a>
       </li>
       <li>
        {/* <Link to="/">Media</Link> */}
        <a href="#last-video">Media</a>
       </li>
       <li>
        {/* <Link to="/">Contact</Link> */}
        <a href="#contact">Contact</a>
       </li>
      </ul>
     </div>
    </nav>
   </Container>
   
  )
 }
}
