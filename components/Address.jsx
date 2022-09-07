import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'

function Address({cart}) {
  let total = 0

  const [provinceData, setProvinceData] = useState([])
  const [cityData, setCityData] = useState([])

  const [address, setAddress] = useState({
    province: '',
    city: '',
    postalCode: '',
    street: '',
    etc: '',
  })

  async function getProvinceHandler() {
    try {
      const res = await fetch('/api/getprovince')
      const response = await res.json()
      const data = response?.rajaongkir?.results
      return data
    } catch (err) {
      console.log(err)
    }
  }

  async function getCityHandler() {
    try {
      const res = await fetch('/api/getcity?province='+address.province)
      const response = await res.json()
      const data = response?.rajaongkir?.results
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const data = { 
    form: {

      origin : 501,
      destination : 114,
      weight : 1000,
      courier : 'jne'
    }
  }

  async function getCostHandler() {
    try {
      const res = await fetch('/api/getongkir', {
        method : 'POST',
        body : JSON.stringify(data)
      })
      const response = await res.json()
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeProvince = (value) => {
    setAddress((p) => ({...p, province : value}))
  }

  const onChangeCity = (value) => {
		const city = cityData.find(el => el.city_id === value)
    setAddress((p) => ({...p, city : city.city_id, postalCode : city.postal_code}))
  }
  const onChangeStreet = (value) => {
    setAddress((p) => ({...p, street : value}))
  }
  const onChangeEtc = (value) => {
    setAddress((p) => ({...p, etc : value}))
  }

	
  useEffect(async () => {
    const province = await getProvinceHandler()
    setProvinceData(province)
  }, [])

  useEffect(async () => {
    const city = await getCityHandler()
    setCityData(city)
  }, [address])

  useEffect(() => {
    cart.forEach(item => {

    })
  })
	
  return (
    <>
      <div>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select Province
        </label>
        <select
					autoComplete='off'
					onChange={(e) => onChangeProvince(e.target.value)}
          id="countries"
          class="peer block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
					<option></option>
          {provinceData.map((province) => (
            <option key={province.province_id} value={province.province_id}>{province.province}</option>
          ))}
        </select>
      </div>
      <div className='mt-4'>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select City
        </label>
        <select
					disabled={!address.province}
					onChange={(e) => onChangeCity(e.target.value)}
          id="countries"
          class="peer block w-full rounded-lg border border-gray-900 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
					<option></option>
          {cityData.map((city) => (
            <option key={city.city_id} value={city.city_id} >{city.city_name}</option>
          ))}
        </select>
      </div>
      <div className='mt-4'>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Street
        </label>
        <input className=' bg-gray-700 w-full max-w-lg rounded-lg border border-slate-200 p-2.5 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40' type='text' onChange={(e) => onChangeStreet(e.target.value)} value={address.street} />
      </div>
      <div className='my-4'>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          More Information
        </label>
        <textarea className=' bg-gray-700 w-full max-w-lg rounded-lg border border-slate-200 p-2.5 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40' type='text-area' onChange={(e) => onChangeEtc(e.target.value)} value={address.etc} placeholder="hint of your address" />
      </div>
      <div className='my-4'>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Fee Expedition check
        </label>
        <button onClick={() => getCostHandler()} className='w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-700/80'>Check</button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
      cart : state.shop.cart
  }
}

export default connect(mapStateToProps)(Address)
