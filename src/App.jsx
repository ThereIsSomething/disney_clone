import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from "./components/ProductionHouse.jsx";

function App() {

  return (
    < div className="">
        <Header/>
        <Slider/>
        <ProductionHouse/>
    </div>
  )
}

export default App
