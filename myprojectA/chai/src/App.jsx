import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tea from './components/Tea';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import './styles/Header.scss'
import './styles/App.scss'
import './styles/Home.scss'
import './styles/Tea.scss'


const App = () => {
  return (
   <>
          <Router>
            <Header/>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        {/* <Route path='/Tea' element={<Tea/>}/> */}
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Products' element={<Products/>}/>
                        <Route path='/Contact' element={<Contact/>}/>

                        

                        
                </Routes>
          </Router>
   </>
  )
}

export default App