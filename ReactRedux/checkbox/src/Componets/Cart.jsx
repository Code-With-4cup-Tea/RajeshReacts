import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { del } from '../store/cartSlice'


const Cart = () => {
    
const update = useDispatch()    

  const cartdata = useSelector((state)=>
            state.cart
  )
let amount = 0
  cartdata.forEach((d)=>
    //  console.log("for",d.price)
     amount =amount+(d.price)
  )

  const remove = (item)=>{
       update(del(item))
        
  }
  
 
  return (
    <div className='p-4 '>
            <div>
                <p className='flex justify-center items-center cursor-pointer
                font-medium text-gray-900 mt-3 hover:text-lg transition-all ease-in-out duration-150'>
                 Selected Products
                </p>
            </div>
            <div className='flex flex-wrap gap-2'>
            {
                cartdata && cartdata.map((item)=>(
                    <div className='w-52 h-auto border-2 border-gray-300 p-1 flex flex-col
            rounded-md items-center  hover:shadow-lg ' key={item.id}>
                    <div >
                        <img src={item.image} alt="img" className='h-28  cover'/>
                    </div>
                    <div>
                         <p>{(item.title).slice(0,20)}...</p>
                    </div>
                    <div>
                         <p className='flex gap-1 justify-center items-center mt-1'>
                         <FaIndianRupeeSign/>{item.price}</p>
                    </div>
                    <div className='mt-1 bg-gray-900 p-2 rounded-md text-white'>
                         <button className='font-semibold' onClick={()=>remove(item.id)}>Remove</button>
                  </div> 
                  </div>
                )) }
                </div>
                <div className='flex justify-center items-center font-semibold text-lg mt-9 '>
                     <p className='flex  justify-center items-center'>Total :<FaIndianRupeeSign/>{amount}</p>
                </div>
   </div>
  )
}

export default Cart