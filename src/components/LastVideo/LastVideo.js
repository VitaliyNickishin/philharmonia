import React from 'react'
import Section from '../Section/Section'
import Title from '../Title/Title'
import YouTube from '@u-wave/react-youtube'
import './LastVideo.sass'

export default function LastVideo() {
 return (
  <Section name="last-video" id="last-video">
   <Title title="our latest youtube video"/>
   <YouTube
    video="LnKJpYGCLsg"
    width="100%"
    height="555px"
    // autoplay
   />
  </Section>
 )
}
