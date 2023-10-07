import React from 'react'
import './App.css' ;
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';


const App = () => {
  return (
   <>
        <Router>
                <Header/>
              <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/About' element={<About/>}/>
                   <Route path='/Contact' element={<Contact/>}/>
                   <Route path='/Product' element={<Product/>}/>
              </Routes>
        </Router>

   </>
  )
}

export default App

