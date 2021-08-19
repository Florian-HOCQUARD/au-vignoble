import React, { useEffect, useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import MainContent from '../components/MainContent'
import '../styles/style.css'
import { graphql } from 'gatsby'

const Product = ({ data }) => {
  const products = data.allDatoCmsProduct.edges
  const [client, setClient] = useState('')

  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost:3000/'
      const response = await window.fetch(url)
      const product = await response.json()
      console.log(product)
      const recup = JSON.parse(window.localStorage.getItem('tokenClient'))
      setClient(recup)
      console.log(recup)
    }
    callApi()
  }, [])
  return (
    <>
      <BurgerMenu />
      <Header />
      <MainContent />
      <div className='samerelapute'>
        {products.map(({ node }) => {
          console.log(`${data.site.siteMetadata.siteUrl}/${node.slug}`)
          return (

            <ProductItem key={node.id} data={node} url={`${data.site.siteMetadata.siteUrl}/product`} />

          )
        })}
      </div>
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
