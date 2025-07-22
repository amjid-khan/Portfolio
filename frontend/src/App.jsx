import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Projects from './component/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
    </div>
  )
}

export default App
