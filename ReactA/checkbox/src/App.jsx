import React, { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {MdDeleteOutline}  from 'react-icons/md'

const App = () => {
  
  const [input,setInput] = useState("")

  const [store,setStore] = useState("");
//for create datastore array
  const dataStore = ()=>{
        if(!input){
          alert("Please Enter Your Task Name")
        }else{
          setStore([...store,input]);
          setInput("")
        }
        
  }

  // for single item delete with help of filter
  const deleteItem = (index)=>{

    const item = store.filter((data,id)=>{
            return  id !== index;
    })
       setStore(item)
  }

  //delete all item 
  const deleteAll = ()=>{
         setStore("")
  }
  
  return (
    <>
          <div className='w-full h-screen bg-black flex justify-center  items-center '>
              <div className='w-80 h-auto flex flex-col items-center  border-2 border-gray-600 rounded-md p-1'>
                      <div className='w-full flex flex-col items-center bg-gray-900 rounded-md p-2'>
                              <p className=' text-white font-semibold '>--Todo--</p>
                      </div>
                      <div className='w-full flex items-center  justify-between mt-2  '>
                             <div className='flex justify-center items-center  '>
                                  <input type="text" placeholder='Enter Your Task...' 
                                  value={input}
                                  onChange={(e)=> setInput(e.target.value)}
                                  className='py-1 px-2 rounded-md outline-none border-none font-semibold text-green-700
                                 text-xl ' />
                             </div>
                             <div className='flex items-center justify-center text-white
                              rounded-md cursor-pointer'>
                                 <AiFillPlusCircle
                                 onClick={dataStore}
                                  className='text-4xl  hover:text-green-500 transition-all ease-in-out duration-100'/>
                             </div>

                      </div>
                      <div className='w-full flex flex-col mt-2 '>
                             {
                              store && store.map((item,index)=>(

                                <div className='w-full flex justify-between items-center' key={index}>
                                  <div className='flex justify-center items-center px-2'>
                                        <p className='text-white text-xl capitalize'>{item}</p>
                                  </div>
                                  <div className='flex items-center justify-center text-white
                                    rounded-md cursor-pointer'>
                                      <MdDeleteOutline className='text-4xl  hover:text-red-500 transition-all ease-in-out duration-100'
                                        onClick={()=>deleteItem(index)}
                                      />
                                  </div>
                             </div>
                              ))
                             }
                             

                      </div>
                      <div className='w-full bg-gray-800 mt-3 flex justify-center items-center p-2 rounded-md'>
                            <button className='text-white font-semibold text-xl w-full
                            hover:text-red-500 transition-all ease-in-out duration-100' onClick={deleteAll}>Delete All</button>                       
                      </div>
              </div>

          </div>
    </>
  )
}

export default App