import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import HeaderSlider from './components/HeaderSlider/HeaderSlider'
import WhatsOn from './components/WhatsOn/WhatsOn'
import SingWithUs from './components/SingWithUs/SingWithUs'
import LastVideo from './components/LastVideo/LastVideo'
import Shop from './components/Shop/Shop'
import Subscribe from './components/Subscribe/Subscribe'
import Instagram from './components/Instagram/Instagram'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import './App.sass'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <HeaderSlider/>
      <WhatsOn/>
      <SingWithUs/>
      <LastVideo/>
      <Shop/>
      <Subscribe/>
      <Instagram/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
