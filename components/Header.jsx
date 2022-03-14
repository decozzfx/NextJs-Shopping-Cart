import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  return (
      <nav className="flex justify-between items-center bg-purple-500 rounded-xl py-5">
         <div className="ml-10 text-6xl p-5">
            <span className='font-bold text-white '>Shopping Cart</span>
         </div>
         <div className="mr-10">
            <div className=" justify-right flex p-5 rounded-2xl bg-slate-100">
               <div className="justify-between flex items-center">
                  <i className=' text-4xl mx-2'>Cart</i>
                  <AiOutlineShoppingCart className='text-4xl mx-2'/>
                  <i className='rounded-full text-2xl text-center px-4 py-2 mx-2 border-2 border-black'>1</i>
               </div>
            </div>
        </div>
      </nav>
  )
}

export default Header
