import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import inst from '../../assets/img/inst/13.png'
import './Instagram.sass'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function Instagram() {
 return (
  <Section name="instagram">
   <Title 
    title="Our instagram"
    name="instagram-title"
   />
   <div className="instagram-img">
    <img src={inst} alt="inst"/>
   </div>
   
    <SocialIcons name="instagram-social"/>
   
   

  </Section>
 )
}
