import React, { useState, useEffect } from 'react'
import img from '../styles/img/verres.jpg'
import { Link } from 'gatsby'

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
    <div key={data.id} className='container'>
      <div className='cards'>
        <div className='container-fliud'>
          <div className='wrapper row'>
            <div className='preview col-md-6'>

              <div className='preview-pic tab-content'>
                <div className='tab-pane active' id='pic-1'><img src={data.test.url} /></div>
                <div className='tab-pane' id='pic-2'><img src={data.test.url} /></div>
                <div className='tab-pane' id='pic-3'><img src={data.test.url} /></div>
                <div className='tab-pane' id='pic-4'><img src={data.test.url} /></div>
                <div className='tab-pane' id='pic-5'><img src={data.test.url} /></div>
              </div>
              <ul className='preview-thumbnail nav nav-tabs'>
                <li className='active'><a data-target='#pic-1' data-toggle='tab'><img src={img} /></a></li>
                <li><a data-target='#pic-2' data-toggle='tab'><img src={data.test.url} /></a></li>
                <li><a data-target='#pic-3' data-toggle='tab'><img src={data.test.url} /></a></li>
                <li><a data-target='#pic-4' data-toggle='tab'><img src={data.test.url} /></a></li>
                <li><a data-target='#pic-5' data-toggle='tab'><img src={data.test.url} /></a></li>
              </ul>

            </div>
            <div className='details col-md-6'>
              <h3 className='product-title'><Link to={`/${data.slug}`}>{data.title}</Link></h3>

              <input type='number' value={rate} onChange={handleChange} />

              {/* <div className='rating'>
                <div className='stars'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                </div>
                <span className='review-no'>41 votes</span>
              </div> */}
              <p className='product-description'>{data.description}</p>
              <h4 className='price'>Prix: <span>{data.price} €</span></h4>
              <h4 className='rest'>Il en reste: <span>{data.quantit}</span></h4>
              <div className='action'>
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
                <button className='like btn btn-default' type='button'><span className='fa fa-heart' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
