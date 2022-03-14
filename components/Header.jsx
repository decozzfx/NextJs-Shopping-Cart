import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { connect } from 'react-redux'

const Header = ({cart}) => {
   const [ cartCount, setCourtCount ] = useState(0)

   useEffect(() => {
      let count = 0
      cart.forEach( item => {
         count += item.qty // if each item in cart have a qty, every value will add to count
      })

      setCourtCount(count)
   },[cart, cartCount])

  return (
      <nav className="flex justify-between items-center shadow-lg bg-gradient-to-r from-pink-600 to-yellow-500 rounded-xl py-5">
         <div className="ml-10 text-6xl p-5">
            <Link href={'/'}><span className='font-bold text-white cursor-pointer'>Shopping Cart</span></Link>
         </div>
         <div className="mr-10">
            <div className=" justify-right flex p-5 rounded-2xl bg-slate-100">
               <Link href={'/cart'}><a><div className="justify-between flex items-center ">
                  <i className=' text-4xl mx-2'>Cart</i>
                  <AiOutlineShoppingCart className='text-4xl mx-2'/>
                  <i className='rounded-full text-2xl text-center px-4 py-2 mx-2 border-2 border-black'>{cartCount}</i>
               </div></a></Link>
            </div>
        </div>
      </nav>
  )
}

const mapStateToProps = (state) => ({ cart : state.shop.cart })

export default connect(mapStateToProps)(Header)
