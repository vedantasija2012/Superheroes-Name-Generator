import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Carousel/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App