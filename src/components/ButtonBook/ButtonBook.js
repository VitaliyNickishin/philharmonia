import React from 'react'
import './ButtonBook.sass'

export default function ButtonBook(props) {
 const {name, onClick} = props
 return (
  <button 
   type="submit" 
   className={`book ${name}`}
   onClick={onClick}
   >
   book now
  </button>
 )
}

// ButtonBook.defaultProps = {
//  name: 'book'
// }