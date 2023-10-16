import React from 'react'
import { routes } from '../../constant'
import styled from 'styled-components'


const Navbar = () => {
  return (
   <SNavbar>
        <NavContainer>
                <SNavbarBrand>LOGO</SNavbarBrand>
                <RightNav>
                     <NavRoutes>
                            {routes.map((route)=>
                                <NavRoute key={route.name}>{route.name}</NavRoute>
                                
                            
                            )}
                     </NavRoutes>
                </RightNav>
        </NavContainer>
   </SNavbar>
  )
}

export default Navbar

const SNavbar = styled.nav`
    background-color:#6f07f6;
`
const NavContainer = styled.div`
    max-width:1300px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    height:70px;
    align-items:center;
    color:white;
`
const SNavbarBrand = styled.div`
  

`
const NavRoutes = styled.div`
      display:flex;
      gap:1rem;
      font-size:2rem;
`
const RightNav = styled.div`
`
const NavRoute = styled.div`
`
