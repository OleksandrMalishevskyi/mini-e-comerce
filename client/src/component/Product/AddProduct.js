import React, { useState } from 'react'

import Axios from 'axios';


function AddProduct() {

  const [NameValue, setNameValue] = useState('')
  const [ImageValue, setImageValue] = useState('')
  const [PriceValue, setPriceValue] = useState('')
  const [StockValue, setStockValue] = useState('')

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value)
  }
  const onImageChange = (event) => {
    setImageValue(event.currentTarget.value)
  }
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value)
  }
  const onStockChange = (event) => {
    setStockValue(event.currentTarget.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      name: NameValue,
      image: ImageValue,
      price: PriceValue,
      stock: StockValue,
    }



    Axios.post('http://localhost:5000/api/product', variables)
      .then(response => {
        console.log(response)
      })
      .catch(error =>
        console.log(error)
      )
  }
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2> Upload Travel Product</h2>
      </div>
      <form onSubmit={onSubmit}>

        <br />
        <br />
        <label>Name</label>
        <input
          onChange={onNameChange}
          value={NameValue}
          placeholder={'Nmae'}
        />
        <br />
        <br />
        <label>Image</label>
        <input
          onChange={onImageChange}
          value={ImageValue}
          placeholder={'Link'}
        />
        <br />
        <br />
        <label>Price</label>
        <input
          onChange={onPriceChange}
          value={PriceValue}
          type="number"
          placeholder={'0'}
        />
        <br />
        <br />
        <label>Count in stock</label>
        <input
          onChange={onStockChange}
          value={StockValue}
          placeholder={'1'}
        />
        <br />
        <br />
        <button onClick={onSubmit}>Submit</button>

      </form>

    </div>
  )
}

export default AddProduct
