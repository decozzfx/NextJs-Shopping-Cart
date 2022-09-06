import React,{useEffect, useState} from 'react'

import { connect } from 'react-redux'
import Address from './Address'

const product = ({cart}) => {
const [ totalPrice , setTotalPrice ] = useState("")

useEffect(() => {
    let total = 0

    cart.forEach(item => {
        total += item.price * item.qty
    });

    if (total) {

    let rupiah = ""
    
    let totalrev = total.toString().split("").reverse().join("")

    for ( let i = 0; i < totalrev.length; i++ ) {
        if (i % 3 === 0) rupiah += totalrev.substr(i, 3) + ",";
    }
    
    const fixRupiah = rupiah.split("", rupiah.length -1).reverse().join("");

    setTotalPrice(fixRupiah)

    }

},[])

  return (
    <section className='flex px-10 mt-8'>
        <div className="w-4/12 shadow-2xl px-10 py-5 mx-5 rounded-lg p-2 text-center bg-gradient-to-r from-sky-800 to-indigo-500 text-white">
            <h2 className='mb-5'>Items</h2>
            <div>
                <div className="my-5">
                    { cart.map((item) => (
                        <div className="">
                            <p>{item.title} x {item.qty}</p>
                        </div>
                    ))}
                    <p className='mt-4 border-t-2'>Total: Rp. {totalPrice}</p>
                </div>
            </div>
        </div>
        <div className="w-4/12 shadow-2xl px-10 py-5 mx-5 rounded-lg p-2 text-center bg-gradient-to-r from-sky-800 to-indigo-500 text-white">
            <h2 className='mb-5'>Address</h2>
            <Address/>
        </div>
        <div className="w-4/12 shadow-2xl px-10 py-5 mx-5 rounded-lg p-2 text-center bg-gradient-to-r from-sky-800 to-indigo-500 text-white">
            <h2 className='mb-5'>Payment</h2>
        </div>
    </section>
  )
}

const mapStateToProps = state => {
    return {
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(product) //null -> not using any of the state , and not maping into state to props, 