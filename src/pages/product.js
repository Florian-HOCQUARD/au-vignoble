import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/style.css'
import img from '../styles/img/verres.jpg'
import { graphql, Link } from 'gatsby'

const Product = ({ data }) => {
  const products = data.allDatoCmsProduct.edges
  console.log(products)
  return (
    <>
      <BurgerMenu />
      <Header />

      {products.map(({ node }) => {
        return (

          <div key={node.id} className='container'>
            <div className='cards'>
              <div className='container-fliud'>
                <div className='wrapper row'>
                  <div className='preview col-md-6'>

                    <div className='preview-pic tab-content'>
                      <div className='tab-pane active' id='pic-1'><img src={node.test.url} /></div>
                      <div className='tab-pane' id='pic-2'><img src={node.test.url} /></div>
                      <div className='tab-pane' id='pic-3'><img src={node.test.url} /></div>
                      <div className='tab-pane' id='pic-4'><img src={node.test.url} /></div>
                      <div className='tab-pane' id='pic-5'><img src={node.test.url} /></div>
                    </div>
                    <ul className='preview-thumbnail nav nav-tabs'>
                      <li className='active'><a data-target='#pic-1' data-toggle='tab'><img src={img} /></a></li>
                      <li><a data-target='#pic-2' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-3' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-4' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-5' data-toggle='tab'><img src={node.test.url} /></a></li>
                    </ul>

                  </div>
                  <div className='details col-md-6'>
                    <h3 className='product-title'><Link to={`/${node.slug}`}>{node.title}</Link></h3>
                    <div className='rating'>
                      <div className='stars'>
                        <span className='fa fa-star checked' />
                        <span className='fa fa-star checked' />
                        <span className='fa fa-star checked' />
                        <span className='fa fa-star' />
                        <span className='fa fa-star' />
                      </div>
                      <span className='review-no'>41 votes</span>
                    </div>
                    <p className='product-description'>{node.description}</p>
                    <h4 className='price'>Prix: <span>{node.price} €</span></h4>
                    <h4 className='rest'>Il en reste: <span>{node.quantit}</span></h4>
                    <div className='action'>
                      <div hidden id='snipcart' data-api-key='YzExZTg4YzItOWU0My00MTljLWI1NjctZmFiZmFlZDBkYTE3NjM3NjM3NDM0MzE0NjY5MzQ0' data-config-modal-style='side' />
                      <button
                        className='add-to-cart btn btn-default snipcart-add-item' data-item-id='starry-night'
                        data-item-price={node.price}
                        data-item-url={node.slug}
                        data-item-description={node.description}
                        data-item-image={node.test.url}
                        data-item-name={node.title} type='button'
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
      })}
      <Footer />
    </>
  )
}

export default Product

export const query = graphql`
  query {
      allDatoCmsProduct {
          edges{
            node{
              slug
              id
              title
              description
              price
              quantit
              test{
                url
              }
            }
          }
            }
      }
  `
