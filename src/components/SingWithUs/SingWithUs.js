import React, { Component } from 'react'
import Section from '../Section/Section'
import Title from '../Title/Title'
import {singData} from '../data'
import Poster from '../Poster/Poster'
import './SingWithUs.sass'

export default class SingWithUs extends Component {
 state = {
  sings: singData
 }
 render() {
  const {sings} = this.state
  return (
   <Section name="sing" id="sing">
    <Title title="Sing with us"/>
    {sings.map(song => {
     return(
      <Poster
       key={song.id}
       item={song}
      />
      )
    })  
    }
   </Section>
  )
 }
}
