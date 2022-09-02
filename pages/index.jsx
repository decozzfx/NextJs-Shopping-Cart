import Head from 'next/head'
import Products from '../components/Products'
import Header from '../components/Header'

import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../redux/Shopping/shopping-actions'

const Home = ({fetchProduct}) => {
   useEffect(() => {
     () => fetchProduct()
   }, [])
   
   return (
      <div className="flex min-h-screen flex-col px-10 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Head>
        <title>Shopping Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>      
      <Products />

      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchProduct : dispatch(fetchProduct())
   }
}

export default connect(null, mapDispatchToProps)(Home)
