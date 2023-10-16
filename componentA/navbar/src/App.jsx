import React from 'react'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './style/index'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Services from './pages/Services';
import Navigation from './component/navigation/Navigation';



const App = () => {
  return (
   <>
              
        <Router>
                    <Navigation/>
              <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/About' element={<About/>}/>
                   <Route path='/Contact' element={<Contact/>}/>
                   <Route path='/Project' element={<Project/>}/>
                   <Route path='/Services' element={<Services/>}/>
              </Routes>
        </Router>

   </>
  )
}

export default App

