import React from 'react'
import {Container} from 'react-bootstrap'
import arrowUp from '../../assets/img/icons/arrow-up.png'
import SocialIcons from '../SocialIcons/SocialIcons'
import Search from '../Search/Search'
import './Footer.sass'

export default function Footer() {
 return (
  <footer className="footer" id="contact">
   <Container>
    <a href="#header"className="footer-arrow">
    <img src={arrowUp} alt="arrowUp"/>
   </a>
   <div className="footer-info">
    <h5>Sydney Philharmonia ChoirS</h5>
    <address>Pier 4, Hickson Road Walsh Bay NSW 2000</address>
    <a href="tel:0282746200">Phone: 02 8274 6200</a>
    <p>admin@sydneyphilharmonia.com.au</p>
    <p>sydneyphilharmonia.com.au</p>
    <p>singwithpassion.com.au</p>
   </div>

   <div className="footer-icons">
    <SocialIcons name="footer-icons__social"/>
    <Search name="footer-icons__search"/>
   </div>
   
   <div className="footer-creators">
    <p><span>Design</span> Sylvia Weimer, Spacelab Design www.spacelabdesign.com</p>
    <p><span>Photography</span> Keith Saunders and Will Taylor</p>
   </div>
   </Container>
  </footer>
 )
}
