import React, {Component} from 'react'
import Button from '../Button/Button'
// import ButtonInfo from '../ButtonInfo/ButtonInfo'
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
      <div className="poster-content">

        <div className="poster-info">
          <h3>{title}</h3>
          <p>{info}</p>
          <span>{price}</span>
        </div>

        <div className="poster-btn">
          <Button text="More info"/>
          <Button text="Book now"/>
       </div>

      </div>
    </article>
  )
 }
}
