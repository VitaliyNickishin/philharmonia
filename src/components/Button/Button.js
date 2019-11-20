import React from 'react'
import './Button.sass'

export default function Button(props) {
 const {name, onClick, text} = props
 return (
  <button 
   type="submit" 
   className={`button ${name}`}
   onClick={onClick}
   >
   {text}
  </button>
 )
}

// ButtonBook.defaultProps = {
//  name: 'book'
// }