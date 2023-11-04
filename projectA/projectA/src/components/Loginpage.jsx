import React from 'react'
import styled from 'styled-components'
import { useFirebase } from '../context/Firebase'
import { useState } from 'react'

const Loginpage = ({popup}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const firebase = useFirebase();
  console.log(firebase)

  console.log(firebase.signupWithPopup)

  
  return (
    <>
        <Login> 
                <button onClick={popup}>close</button>
                <input type="email"  placeholder='enter Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
               
                <input type="password"  placeholder='enter password' required  onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button onClick={()=>firebase.singUpuserWithemailandPassword(email,password)} >login</button>
               <br/>
               <button onClick={firebase.signupWithPopup}>Sing_Up_with_Google</button>
               <br/>
               
               
        </Login>
    </>
  )
}

export default Loginpage

const Login = styled.div`
        background-color:rgba(0,0,0,0.5);
        width:100vw;
        height:100vh;
        z-index:5000;
        position:absolute;
        top:0;
        right:0;
        color:white;
      
        display:flex;
       justify-content:center;
       align-items:center;

        button{
                color:white;
        }

        form{
          display:flex;
          flex-direction:column;
        }

        

`