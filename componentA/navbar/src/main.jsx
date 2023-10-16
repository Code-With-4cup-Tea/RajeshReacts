import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,300;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
        *{
           margin:0;
          padding:0;
          box-sizing:border-box;
        }
  
  html,body{
    font-family:'Oswald',sans-serif;
    font-size:62.5%;

    @media (max-width:768px){
      font-size:50%;
    }
    @media (max-width:450px){
      font-size:40%;
    }

  }
  body{
    font-size:1.6rem;
  }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>,
)
