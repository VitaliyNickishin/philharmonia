import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import {FaAlignRight} from 'react-icons/fa'
import './Navbar.sass'

export default class Navbar extends Component {
 state = {
  isOpen: false
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
        <a href="#whatson" className="active">What's on</a>
       </li>
       <li>
        <a href="#support">Support us</a>
       </li>
       <li>
        <a href="#sing">Sing with us</a>
       </li>
       <li>
        <a href="#about">About us</a>
       </li>
       <li>
        <a href="#media">Media</a>
       </li>
       <li>
        <a href="#contact">Contact</a>
       </li>
      </ul>
     </div>
    </nav>
   </Container>
   
  )
 }
}
