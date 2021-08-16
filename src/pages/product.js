import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import '../styles/style.css'
import { graphql } from 'gatsby'

const Product = ({ data }) => {
  const products = data.allDatoCmsProduct.edges

  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost:3000/'
      const response = await window.fetch(url)
      const product = await response.json()
      console.log(product)
      /* eslint no-undef: "off" */
      // Snipcart.api.customer.fetchOrders()
    }
    callApi()
  }, [])

  return (
    <>
      <BurgerMenu />
      <Header />

      {products.map(({ node }) => {
        console.log(`${data.site.siteMetadata.siteUrl}/${node.slug}`)
        return (

          <ProductItem key={node.id} data={node} url={`${data.site.siteMetadata.siteUrl}/product`} />

        )
      })}
      <Footer />
    </>
  )
}

export default Product

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
