import React, { useState } from 'react'

const App = () => {
  const sportsArry = ["Cricket","Football","Basketball","Chess","Race"]
  const [display,setDisplay] = useState(false)

  const deleteDisplay =()=>{
      setDisplay(!display)  
  }

  
  return (
    <div className='flex flex-col  justify-center items-center w-full h-screen gap-4'>
        
         {
          sportsArry.map((item)=>(
            <div className='flex gap-4' key={item} >
            <div className='flex gap-4 font-bold text-base' >
            <input type="checkbox" onClick={deleteDisplay} />
            <p>{item}</p>
           </div>
             {
              display &&(
                <button className= 'bg-red-500 p-1 font-medium '>delete</button>
              )
             }
            </div>
            
          ))
         }
        
        
    </div>
  )
}

export default App