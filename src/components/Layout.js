import React from 'react'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
import '../styles/style.css'
import 'sanitize.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <BurgerMenu />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
