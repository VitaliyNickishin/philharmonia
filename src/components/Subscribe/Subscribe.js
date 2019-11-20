import React from 'react'
import Title from '../Title/Title'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Subscribe.sass'


export default function Subscribe() {
 return (
  <Section name="subscribe">
   <Title 
    title="Subscribe."
    name="subscribe-title"
   />
   <div className="subscribe-btn">
    <Button text="Email"/>
    <Button text="Sing up"/>
   </div>
  </Section>
 )
}
