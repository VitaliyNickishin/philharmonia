import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import HeaderSlider from './components/HeaderSlider/HeaderSlider'
import WhatsOn from './components/WhatsOn/WhatsOn'
import SingWithUs from './components/SingWithUs/SingWithUs'
import './App.sass'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <HeaderSlider/>
      <WhatsOn/>
      <SingWithUs/>
    </div>
  );
}

export default App;
