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
        <a href="#" className="active">What's on</a>
       </li>
       <li>
        {/* <Link to="/">Support us</Link> */}
        <a href="#">Support us</a>
       </li>
       <li>
        {/* <Link to="/">Sing with us</Link> */}
        <a href="#">Sing with us</a>
       </li>
       <li>
        {/* <Link to="/">About us</Link> */}
        <a href="#">About us</a>
       </li>
       <li>
        {/* <Link to="/">Media</Link> */}
        <a href="#">Media</a>
       </li>
       <li>
        {/* <Link to="/">Contact</Link> */}
        <a href="#">Contact</a>
       </li>
      </ul>
     </div>
    </nav>
   </Container>
   
  )
 }
}
