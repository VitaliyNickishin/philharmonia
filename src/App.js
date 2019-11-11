import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import './App.sass'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <HeaderSlider/>
    </div>
  );
}

export default App;
