import React from 'react'
import search from '../../assets/img/icons/search.png'
import './Search.sass'

export default function Search({name}) {
 return (
  <button type="button" className={`search ${name}`}>
   <img src={search} alt="search"/>
  </button>
 )
}
