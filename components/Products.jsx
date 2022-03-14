import React from 'react'
import { connect } from 'react-redux'

import Product from './Product'


const Products = ({products}) => {
//    console.log(products)

  return (
    <section className="flex w-full flex-1 items-center justify-center px-10 text-center">
        <div className="flex-col px-20 ">
            { products.map((product) => (
                <Product key={product.id} product={product} />
            )) }
        </div>
    </section>
  )
}

// shortcode
const mapStateToProps = (state) => ({products : state.shop.products})

// long code
// const mapStateToProps = (state) => {
//     return {
//         products : state.shop.products
//     }
// }

export default connect(mapStateToProps)(Products)