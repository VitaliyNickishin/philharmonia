import React from 'react'
import fb from '../../assets/img/social/fb.png'
import tw from '../../assets/img/social/tw.png'
import inst from '../../assets/img/social/inst.png'
import youtube from '../../assets/img/social/youtube.png'
import './SocialIcons.sass'

export default function SocialIcons({name}) {
 return (
  <div className={`social ${name}`}>
   <a href="#">
    <img src={fb} alt="fb"/>
   </a>
   <a href="#">
    <img src={tw} alt="tw"/>
   </a>
   <a href="#">
    <img src={inst} alt="inst"/>
   </a>
   <a href="#">
    <img src={youtube} alt="youtube"/>
   </a>
  </div>
 )
}

// SocialIcons.defaultProps={
//  name: 'social'
// }