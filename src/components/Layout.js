import React from 'react'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
import '../styles/style.css'
import MainContent from './MainContent'
import 'sanitize.css'

const Layout = () => {
  return (
    <>

      <BurgerMenu />
      <Header />
      <MainContent />

    </>
  )
}

export default Layout
