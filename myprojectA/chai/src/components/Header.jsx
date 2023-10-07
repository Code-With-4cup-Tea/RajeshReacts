import React from 'react'
import { NavLink } from 'react-router-dom'
import {GiCoffeeCup} from 'react-icons/gi'


const Header = () => {
  return (
        <div className="container">
                <div className="leftcontainer">
                                 <GiCoffeeCup className='icon'/>
                                 <p>Tea<span>.in</span></p>
                </div>
                <div className="rightcontainer">
                     <NavLink to='/'>Home</NavLink>
                     <NavLink to='/#teacontainer'>Tea</NavLink>
                     <NavLink to='/About'>About_us</NavLink>
                     <NavLink to='/Products'>Products</NavLink>
                     <NavLink to='/Contact'>Contact</NavLink>

                    
                </div>
        </div>
  )
}

export default Header