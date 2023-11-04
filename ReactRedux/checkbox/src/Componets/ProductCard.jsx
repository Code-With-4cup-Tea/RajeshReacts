import React, { useEffect, useState } from 'react'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import img from '../assets/OIP.jpg'
import { json } from 'react-router-dom'
import { add } from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProduct} from '../store/ProductSlice'
import { statuss } from '../store/ProductSlice'
 
const ProductCard = () => {
    const dispatch = useDispatch();
    
    const {data:product,status} = useSelector((state)=>state.product) //this give all state waha se hum product ko select

    // data ko alias ki product se 

    // use create for run one time when page load
    useEffect(()=>{   
        dispatch(fetchProduct())
        //   const fetchProduct = async () =>{
        //                 const response = await fetch(Url)
        //                 console.log("this give response in string we have convert in json")
        //                 const jsonData = await response.json();
        //                 console.log(jsonData)
        //                 setProduct(jsonData)
        //   }

        //   fetchProduct();
    },[])
    const addHandle=(item)=>{
        dispatch(add(item))
    }

// for using status import first statuss form productSlice.js

if(status === statuss.LOADING){
        return <h1 className='flex justify-center items-center font-medium text-green-600 '>Loading......</h1>
}

  return (
   <div className='p-4 '>
            <div>
                <p className='flex justify-center items-center cursor-pointer
                font-medium text-gray-900 mt-3 hover:text-lg transition-all ease-in-out duration-150'>
                 Welcome To Our Store
                </p>
            </div>
            <div className='flex flex-wrap gap-2'>
            {
                product && product.map((item)=>(
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
                         <button className='font-semibold' onClick={()=>addHandle(item)}>Add To Cart</button>
                  </div> </div>
                )) }
                </div>
   </div>
  )
}
export default ProductCard