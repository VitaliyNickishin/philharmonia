import React from 'react'
import './ButtonInfo.sass'

export default function ButtonInfo(props) {
 const {name, onClick} = props
 return (
  <button 
   type="submit" 
   className={`info ${name}`}
   onClick={onClick}
   >
   more info 
  </button>
 )
}

// ButtonBook.defaultProps = {
//  name: 'book'
// }