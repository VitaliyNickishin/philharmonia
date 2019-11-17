import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import './Subscribe.sass'


export default function Subscribe() {
 return (
  <Section name="subscribe">
   <Title 
    title="Subscribe."
    name="subscribe-title"
   />
   <div className="subscribe-btn">
    <button type="submit">Email</button>
    <button type="submit">Sing up</button>
   </div>
  </Section>
 )
}
