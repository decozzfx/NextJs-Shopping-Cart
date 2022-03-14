import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import CartSection from '../components/CartSection'

const cart = () => {
  return (
    <div className="flex min-h-screen flex-col px-10 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Head>
        <title>Cart Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <CartSection/>

      </div>
  )
}

export default cart