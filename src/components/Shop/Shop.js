import React from 'react'
import Section from '../Section/Section'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Title from '../Title/Title'
import suvenirs from '../../assets/img/shop/suvenirs.png'
import img11 from '../../assets/img/shop/11.png'
import './Shop.sass'

export default function Shop() {
 return (
  <Section name="shop" id="support">
   <Row>
    <Col lg={4}>
     <Title title="Our shop"/>
     <div className="shop-img">
      <img src={suvenirs} alt="suvenirs"/>
     </div>
    </Col>
    <Col lg={8}>
     <Title title="Support us" name="shop-title"/>
     <div className="shop-support">
      <div className="shop-support__img">
       <img src={img11} alt="img11"/>
      </div>
       <div className="rectangle">
        <p>Sydney Philharmonia choirs <span>Celebrating 100 years in 2020</span> </p>
       </div>
     </div>
    </Col>
    
   </Row>
  </Section>
 )
}
