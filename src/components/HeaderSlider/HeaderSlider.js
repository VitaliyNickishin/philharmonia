import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderArrow from '../SliderArrow/SliderArrow'
// import {FaChevronRight} from 'react-icons/fa'
// import {FaChevronLeft} from 'react-icons/fa'
import slide1 from '../../assets/img/slider/1.png'
import slide2 from '../../assets/img/slider/1.webp'
import slide3 from '../../assets/img/slider/2.jpg'
import slide4 from '../../assets/img/slider/1.webp'
import arrowLeft from '../../assets/img/icons/arrow-left.png'
import arrowRight from '../../assets/img/icons/arrow-right.png'
import Banner from '../Banner/Banner'
import Button from '../Button/Button'
import './HeaderSlider.sass'

export default class HeaderSlider extends Component {
 render() {
  const settings = {
  //  className: 'header-slider',
	 arrows: true,
   dots: true,
   infinite: true,
  //  autoplay: true,
   speed: 1500,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: <SliderArrow name="arrow header-prev" to="prew">
               {/* <FaChevronLeft/> */}
               <div className="arrow-left">
                 <img src={arrowLeft} alt="arrowleft"/>
               </div>
              </SliderArrow>,
   nextArrow: <SliderArrow name="arrow header-next" to="next">
               {/* <FaChevronRight/> */}
               <div className="arrow-right">
                 <img src={arrowRight} alt="arrowright"/>
               </div>
              </SliderArrow>,
  //  dotsClass: "dots",
   responsive: [
    // {
    //   breakpoint: 992,
    //   settings: {
    //   slidesToShow: 1,
    //   slidesToScroll: 1
		// 				}
		// 			}
  ]
 };
  return (
   <section className="header-slider">
    <Slider {...settings}>

     <div className="header-slider__img">
      <Banner
        name="header-slider__banner1" 
        title="elgar the dream of gerontius" 
        subtitle="400 singers perform elgar’s monumental work under the stunning Sydney opera house sails."
      >
        <Button 
          name="header-slider__btn"
          text="Book now"
        />
      </Banner>
      <img src={slide1} alt="slide1"/>
     </div>

     <div className="header-slider__img">
     <Banner
        name="header-slider__banner2" 
        title="Romeo and Julietta" 
        subtitle="100 actors monumental work under the stunning London opera house sails."
      >
        <Button 
          name="header-slider__btn"
          text="Book now"
        />
      </Banner>
      <img src={slide2} alt="slide2"/>
     </div>

     <div className="header-slider__img">
     <Banner
        name="header-slider__banner3" 
        title="Le Nozze di Figaro" 
        subtitle="Together with Don Giovanni and Cosi fan Tutte, which make up Mozart's trio of masterpieces with libretti by Da Ponte."
      >
        <Button 
          name="header-slider__btn"
          text="Book now"
        />
      </Banner>
      <img src={slide3} alt="slide3"/>
     </div>

     <div className="header-slider__img">
      <Banner
        name="header-slider__banner4" 
        title="Rigoletto" 
        subtitle="Verdi, one of opera's greats, had a long career. For many his Egyptian Aida is an ideal first opera."
      >
        <Button 
          name="header-slider__btn"
          text="Book now"
        />
      </Banner>
      <img src={slide4} alt="slide4"/>
     </div>
    </Slider>
   </section>
  )
 }
}
