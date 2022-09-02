import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { connect } from 'react-redux'

const Header = ({ cart }) => {
  const [cartCount, setCourtCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach((item) => {
      count += item.qty // if each item in cart have a qty, every value will add to count
    })

    setCourtCount(count)
  }, [cart, cartCount])

  return (
    <nav className="mt-10 flex items-center justify-between rounded-xl bg-gradient-to-r from-pink-600 to-yellow-500 py-5 shadow-lg">
      <div className="ml-10 p-5 text-6xl">
        <Link href={'/'}>
          <span className="cursor-pointer font-bold text-white">
            Shopping Cart
          </span>
        </Link>
      </div>
      <div className="mr-10">
        <Link href={'/cart'}>
          <a>
            <div className=" justify-right flex rounded-2xl bg-slate-100 p-5">
              <div className="flex items-center justify-between ">
                <i className=" mx-2 text-4xl">Cart</i>
                <AiOutlineShoppingCart className="mx-2 text-4xl" />
                <i className="mx-2 rounded-full border-2 border-black px-4 py-2 text-center text-2xl">
                  {cartCount}
                </i>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({ cart: state.shop.cart })

export default connect(mapStateToProps)(Header)
