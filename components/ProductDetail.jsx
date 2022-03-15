import React from 'react'
import { addToCart } from '../redux/Shopping/shopping-actions'
import { connect } from 'react-redux'


const ProductDetail = ({currentItem, addToCart}) => {
  return (
    <div className='flex mt-10 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className="w-6/12">
            <img src={currentItem.image} alt="productDetail" className='rounded-l-lg' />
        </div>
        <div className="w-6/12 p-4 text-white">
            <p className='text-2xl font-semibold mb-12'>{currentItem.title}</p>
            <p className='text-lg mb-8 w-3/4 mb-12'>{currentItem.description}</p>
            <p className='text-2xl font-bold mb-12'>${currentItem.price}</p>
            <button className='py-2 px-3 border-2 rounded-xl bg-green-500 text-white hover:bg-green-700' onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
        </div>
    </div>
  )
} 
const mapStateToProps = state => {
    return {
        currentItem : state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart : (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)