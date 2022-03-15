import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, adjustQty } from '../redux/Shopping/shopping-actions'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const CartItem = ({item, removeFromCart, adjustQty}) => {
    // console.log(item)
    const [ input, setInput ] = useState(item.qty) 

    function onChangeHandler(e){
        if(e.target.value < 0) return setInput(0)
        setInput(e.target.value)
        adjustQty(item.id, e.target.value)

    }

  return (
    <div className='flex shadow-lg h-auto mt-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl'>
        <div className="w-3/12">
            <img src={item.image} alt={item.title} className='rounded-l-xl h-36' loading='lazy' />
        </div>
        <div className="w-6/12 ml-3 mt-2 mr-3 ">
            <p className='text-xl font-bold'>{item.title}</p>
            <p className='mt-2 text-md line-clamp-2'>{item.description}</p>
            <p className='mt-2 text-xl font-bold'>${item.price}</p>
        </div>
        <div className="w-3/12 flex flex-col items-end mr-5">
            <div className="text-black mt-5">
                <input className='w-16 text-xl p-2 rounded-xl' type="number" id={item.id} name='qty' value={input} onChange={onChangeHandler} />
            </div>
            <div className="mt-5 py-2 px-2 rounded-lg border-2 flex items-center hover:bg-black/20 ">
                <RiDeleteBin6Fill/>
                <button onClick={() => removeFromCart(item.id)} className='ml-2'>Delete</button>
            </div>
        </div>
        
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem) // null its mean aint need props