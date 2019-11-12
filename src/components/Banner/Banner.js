import React from 'react'
import './Banner.sass'

export default function Banner({name, children, title, subtitle}) {
 return (
  <div className={`banner ${name}`}>
   <h1>{title}</h1>
   <p>{subtitle}</p>
   {children}
  </div>
 )
}

// Banner.defaultProps = {
//  name: 'banner'
// }