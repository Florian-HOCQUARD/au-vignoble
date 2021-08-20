import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/style.css'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const cv = data.datoCmsQsn
  return (
    <>
      <BurgerMenu />
      <Header />
      <div>
        <img id='cv' src={cv.cv.url} />
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
query {
  datoCmsQsn {
    id
    cv {
      url
    }
  }
}

    `
