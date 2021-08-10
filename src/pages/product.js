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

          <div key={node.id} class='container'>
            <div class='cards'>
              <div class='container-fliud'>
                <div class='wrapper row'>
                  <div class='preview col-md-6'>

                    <div class='preview-pic tab-content'>
                      <div class='tab-pane active' id='pic-1'><img src={node.test.url} /></div>
                      <div class='tab-pane' id='pic-2'><img src={node.test.url} /></div>
                      <div class='tab-pane' id='pic-3'><img src={node.test.url} /></div>
                      <div class='tab-pane' id='pic-4'><img src={node.test.url} /></div>
                      <div class='tab-pane' id='pic-5'><img src={node.test.url} /></div>
                    </div>
                    <ul class='preview-thumbnail nav nav-tabs'>
                      <li class='active'><a data-target='#pic-1' data-toggle='tab'><img src={img} /></a></li>
                      <li><a data-target='#pic-2' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-3' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-4' data-toggle='tab'><img src={node.test.url} /></a></li>
                      <li><a data-target='#pic-5' data-toggle='tab'><img src={node.test.url} /></a></li>
                    </ul>

                  </div>
                  <div class='details col-md-6'>
                    <h3 class='product-title'><Link to={`/${node.slug}`}>{node.title}</Link></h3>
                    <div class='rating'>
                      <div class='stars'>
                        <span class='fa fa-star checked' />
                        <span class='fa fa-star checked' />
                        <span class='fa fa-star checked' />
                        <span class='fa fa-star' />
                        <span class='fa fa-star' />
                      </div>
                      <span class='review-no'>41 votes</span>
                    </div>
                    <p class='product-description'>{node.description}</p>
                    <h4 class='price'>Prix: <span>{node.price} €</span></h4>
                    <h4 class='rest'>Il en reste: <span>{node.quantit}</span></h4>
                    <div class='action'>
                      <button class='add-to-cart btn btn-default' type='button'>Ajouter au panier</button>
                      <button class='like btn btn-default' type='button'><span class='fa fa-heart' /></button>
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
