import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/style.css'

const ProductItem = ({ data, url }) => {
  const [rate, setRate] = useState('')

  useEffect(() => {
    const remember = JSON.parse(window.localStorage.getItem('star'))
    setRate(remember)
  }, [])

  const handleChange = (event) => {
    const value = event.target.value
    window.localStorage.setItem('star', JSON.stringify(value))
    setRate(value)
  }

  console.log(rate)

  return (
    <div key={data.id} id='container'>

      <img src={data.test.url} />

      <div id='shopdescription'>
        <h3><Link to={`/${data.slug}`}>{data.title}</Link></h3>

        <input type='number' value={rate} onChange={handleChange} />
        <p>{data.description}</p>
        <h4>Prix: <span>{data.price} €</span></h4>
        <h4>Il en reste: <span>{data.quantit}</span></h4>
        <div>
          <div hidden id='snipcart' data-api-key='YzExZTg4YzItOWU0My00MTljLWI1NjctZmFiZmFlZDBkYTE3NjM3NjM3NDM0MzE0NjY5MzQ0' data-config-modal-style='side' />
          <button
            className='add-to-cart btn btn-default snipcart-add-item' data-item-id={data.id}
            data-item-price={data.price}
            data-item-url={url}
            data-item-description={data.description}
            data-item-image={data.test.url}
            data-item-name={data.title} type='button'
            data-item-quantity='1'
            data-item-custom1-name='Cadeau'
            data-item-custom1-type='checkbox'
          >Ajouter au panier
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductItem
