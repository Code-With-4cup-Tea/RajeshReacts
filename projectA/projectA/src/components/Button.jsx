import React from 'react'
import '../styles/button.scss'
import Loginpage from './Loginpage'


const Button = ({open,popup}) => {
  return (
    <div>
      
      <button onClick={popup}>Login</button>
      
      {open && <Loginpage popup={popup}/>}
    </div>
  )
}

export default Button

