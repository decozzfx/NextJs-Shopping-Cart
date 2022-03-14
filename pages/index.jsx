import Head from 'next/head'
import Products from '../components/Products'

import Header from '../components/Header'

const Home = () => {
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


export default Home