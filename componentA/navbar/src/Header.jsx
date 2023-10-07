import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <>
        <Container>
              <Leftside>
                    <h3>Logo</h3>
              </Leftside>
              <Rightside>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/About'>About</NavLink>
                        <NavLink to='/Contact'>Contact</NavLink>
                        <NavLink to='/Product'>Product</NavLink>
                            
                        
              </Rightside>
        </Container>
    </>
  )
}

export default Header


const Container = styled.div`
`
const Leftside = styled.div`
`
const Rightside = styled.div`
`


