import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import './styles/App.scss';
import './styles/Colors.scss';
import './styles/header.scss'
import './styles/home.scss'
import Home from './components/Home';


const App = () => {
  return (
   <Router>
                <Header/> { //3: for fixed header in all pages so put Header before Routes or after Router//  
                              }
          
          
                                                        
        <Routes>
                  {
                    //6:now we creating route means pages
                  }
                <Route path='/' element={<Home/>}/>
        </Routes>
   </Router>
  )
}

export default App