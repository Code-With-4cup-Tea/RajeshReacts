import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Button from './Button'



const Header = () => {

const [open,setOpen] = useState(false);




const popup = ()=>{
    setOpen(!open)
}   
   

  
    
  return (
            <nav>
                <h1>TechMoon</h1>
                <main> 
                {
                    //4:link using for not reload page afte click text after to show page address name
                }
                    <HashLink to={'/#home'}>Home</HashLink>
                    <Link to={'/contact'}>Contact</Link>
                    <HashLink to={'/#about'}>About</HashLink>
                    <HashLink to={'/#brands'}>Brands</HashLink>
                    <Link to={'/services'}>Services</Link>
                    <Button open={open} popup={popup}/>
                    
                </main>
            </nav>
  )
}

export default Header