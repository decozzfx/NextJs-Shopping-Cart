import React from 'react'

const CartItem = ({item}) => {
    console.log(item)
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
                <input className='w-16 text-xl p-2 rounded-xl' type="number" id={item.id} name='qty' value={item.qty}  />
            </div>
            <div className="mt-5">
                <button className='py-2 px-2 rounded-lg border-2'>Delete</button>
            </div>
        </div>
        
    </div>
  )
}

export default CartItem