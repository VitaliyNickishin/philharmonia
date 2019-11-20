import React from 'react'
import './ButtonBook.sass'

export default function ButtonBook(props) {
 const {name, onClick, text} = props
 return (
  <button 
   type="submit" 
   className={`book ${name}`}
   onClick={onClick}
   >
   {text}
  </button>
 )
}

// ButtonBook.defaultProps = {
//  name: 'book'
// }