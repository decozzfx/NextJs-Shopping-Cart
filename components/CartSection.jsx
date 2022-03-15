import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { connect } from 'react-redux'

const CartSection = ({cart}) => {
  return (
    <section className='flex min-h-full px-10 '>
        <div className="w-8/12 mr-5 ">
        { cart.map((item, i) => (
            <CartItem  item={item} key={i}/>
        ))}
        </div>
        <div className="w-4/12">
            <CartSummary cart={cart}/>
        </div>
    </section>
  )
}

const mapStateToProps = state => {
    return {
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(CartSection)