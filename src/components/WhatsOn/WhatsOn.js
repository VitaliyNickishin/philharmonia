import React, { Component } from 'react'
import Section from '../Section/Section'
import Title from '../Title/Title'
import {whatsOnData} from '../data'
import Poster from '../Poster/Poster'
import './WhatsOn.sass'

export default class WhatsOn extends Component {
 state = {
  whatson: whatsOnData
 }
 render() {
  const {whatson} = this.state
  return (
   <Section name="whatson" id="whatson">
    <Title title="What's on" />
    {whatson.map(element => {
     return (
      <Poster 
       key={element.id}
       item={element}
      />
     )
    })}
   </Section>
  )
 }
}
