import React from 'react'

import { connect } from 'react-redux'
import {addToCart} from '../redux/Shopping/shopping-actions'

const product = ({product, addToCart}) => {
    // console.log(product) 
  return (

    <div className='flex rounded-xl shadow-2xl min-h-full my-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>
        <div className="w-4/12">
            <img src={product.image} alt={product.title} className='border-md rounded-l-xl' loading='lazy' />
        </div>
        <div className="flex- flex-col w-6/12 m-5 text-left">
            <p className='text-2xl font-semibold mb-8'>{product.title}</p>
            <p className='text-lg mb-8 line-clamp-2'>{product.description}</p>
            <p className='text-2xl font-bold'>${product.price}</p>
        </div>
        <div className="w-2/12 p-5">
            <button className='py-2 px-3 border-2 rounded-xl bg-green-400 text-white hover:bg-green-700' onClick={() => addToCart(product.id)}>Add To Cart</button>
        </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {  // dispatch meaning sending that function
    return {
        addToCart : (id) => dispatch(addToCart(id))
    }
} 

export default connect(null, mapDispatchToProps)(product) //null -> not using any of the state , and not maping into state to props, 