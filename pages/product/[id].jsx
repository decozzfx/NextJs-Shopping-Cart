import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import ProductDetail from '../../components/ProductDetail'

const productDetail = () => {
  return (
    <div className="flex min-h-screen flex-col px-10 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Head>
        <title>Product Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ProductDetail/>

      </div>
  )
}


export default productDetail