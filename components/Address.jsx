import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import axios from 'axios'

function Address(props) {
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
      const res = await fetch('/api/getaddress')
      const response = await res.json()
      const data = response?.rajaongkir?.results
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  async function getCityHandler() {
    try {
      const res = await fetch('/api/getcity?province='+address.province)
      const response = await res.json()
      // const data = response?.rajaongkir?.results
      console.log(response)
      // return data
    } catch (err) {
      console.log(err)
    }
  }

  const onChangeProvince = (value) => {
    setAddress((p) => ({...p, province : value}))
  }

  const onChangeCity = (value) => {
    setAddress((p) => ({...p, city : value}))
  }

  useEffect(async () => {
    const province = await getProvinceHandler()
    setProvinceData(province)
  }, [])

  useEffect(async () => {
    const city = await getCityHandler()
    setCityData(city)
  }, [address])
	
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
					onChange={(e) => onChangeProvince(e.target.value)}
          id="countries"
          class="peer block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          {provinceData.map((province) => (
            <option key={province.province_id} >{province.province}</option>
          ))}
        </select>
      </div>
      {/* <div className='mt-4'>
        <label
          for="countries"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select City
        </label>
        <select
          id="countries"
          class="peer block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          {cityData.map((city) => (
            <option key={province.province_id} >{province.province}</option>
          ))}
        </select>
      </div> */}
    </>
  )
}

export default Address
