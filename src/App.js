import React from 'react'
import { Footer, Blog, Possibilities, WhatGPT3, Features, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'
import './index.css'


function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App