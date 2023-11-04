import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const items = useSelector((state)=>
         state.cart
  );
  console.log(items)

  return (
    
    <div className='w-full h-auto bg-slate-600 text-white font-medium '>
          <div className='md:flex justify-between items-center p-4 px-12 hidden'>
                    <div className='cursor-pointer'>
                        <p>Logo</p>
                    </div>
                    <div >
                        <ul className='flex justify-between items-center gap-5 '>
                            <Link to='/'><li className='cursor-pointer'>Home</li></Link>
                            <Link to='/store'><li className='cursor-pointer'>Store</li></Link>
                            <Link to='/cart'><li className='cursor-pointer'>Cart {items.length}</li></Link>
                        </ul>
                    </div>
          </div>
          {
            /*     for mobile         */
          }
          <div className='flex justify-between items-center p-2 px-8 md:hidden'>
                    <div>
                        <p className='cursor-pointer'>Logo</p>
                    </div>
                    <div >
                        <ul className='flex justify-between items-center gap-5 '>
                            <Link to='/'><li className='cursor-pointer'>Home</li></Link>
                            <Link to='/store'><li className='cursor-pointer'>Store</li></Link>
                            <Link to='/cart'><li className='cursor-pointer'>Cart {items.length}</li></Link>
                        </ul> 
                    </div>
          </div>
    </div>
  )
}

export default Header