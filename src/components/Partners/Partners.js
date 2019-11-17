import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import partner1 from '../../assets/img/partners/1.png'
import partner2 from '../../assets/img/partners/2.png'
import partner3 from '../../assets/img/partners/3.png'
import partner4 from '../../assets/img/partners/4.png'
import partner5 from '../../assets/img/partners/5.png'
import partner6 from '../../assets/img/partners/6.png'
import partner7 from '../../assets/img/partners/7.png'
import './Partners.sass'

export default function Partners() {
 return (
  <Section name="partners">
   <Title 
    title="Our partners."
    name="partners-title"
   />
   <div className="partners-img">
    <img src={partner1} alt="partner1"/>
    <img src={partner2} alt="partner2"/>
    <img src={partner3} alt="partner3"/>
    <img src={partner4} alt="partner4"/>
    <img src={partner5} alt="partner5"/>
    <img src={partner6} alt="partner6"/>
    <img src={partner7} alt="partner7"/>
   </div>
  </Section>
 )
}
