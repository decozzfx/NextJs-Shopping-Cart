import React, { useEffect, useState } from 'react'

const CartSummary = ({cart}) => {
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ totalItems, setTotalItems ] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach(item => {
      items += item.qty
      price += item.price * item.qty
    })

    setTotalPrice(price)
    setTotalItems(items)

  },[cart,totalItems, totalPrice, setTotalItems, setTotalPrice])

  return (
    <div className='shadow-lg p-5 h-auto mt-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl'>
      <h2 className='text-xl font-bold mb-10'>Cart Summary</h2>
      <div className="flex">
        <p className='text-xl font-bold'>Total : ({totalItems} items)</p>
        <i className='text-xl font-bold mb-10 ml-10'>${totalPrice}</i>
      </div>
      <button className='py-2 px-4 bg-gradient-to-bl from-red-400 to-green-500 font-bold rounded-xl'>Check Out</button>
    </div>
  )
}

export default CartSummary