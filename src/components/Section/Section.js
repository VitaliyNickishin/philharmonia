import React from 'react'
import {Container} from 'react-bootstrap'
import './Section.sass'

export default function Section({name, id, children}) {
 return (
  <section className={`section ${name} `} id={`${id}`}>
   <Container>
    {children}
   </Container>
  </section>
 )
}
