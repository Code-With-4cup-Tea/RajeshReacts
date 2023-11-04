import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './Componets/Header'
import Home from './Componets/Home'
import Cart from './Componets/Cart'
import Store from './Componets/Store'
 
const App = () => {
  
  
  return (
      <div >
               <Provider store={store}>
                      <Router>
                                <Header/> 
                            <Routes>
                                  <Route path='/*' element={<Home/>}/>
                                  <Route path='/cart' element={<Cart/>}/>
                                  <Route path='/store' element={<Store/>}/>
                            </Routes>
                        </Router>
               </Provider>
      </div>
  )
}

export default App