import React, {Component} from 'react'
import ButtonBook from '../ButtonBook/ButtonBook'
import ButtonInfo from '../ButtonInfo/ButtonInfo'
import './Poster.sass'

export default class Poster extends Component {
 render() {
  const {url,alt,title,info,price} = this.props.item
  return (
   <article className="poster">
     <div className="poster-img">
      <img
       src={url} 
       alt={alt}
      />
      </div>
      <div className="poster-info">
       <h3>{title}</h3>
       <p>{info}</p>
       <span>{price}</span>
       <div className="poster-info__btn">
        <ButtonInfo/>
        <ButtonBook/>
       </div>
      </div>
      
    </article>
  )
 }
}
