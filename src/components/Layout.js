import React from 'react'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
import '../styles/style.css'
import MainContent from './MainContent'
import 'sanitize.css'
import TexteAccueil from './TexteAccueil'
import Shop from './Shop'
import Footer from './Footer'

const Layout = () => {
  return (
    <>

      <BurgerMenu />
      <Header />
      <MainContent />
      <div class='cardShop'>
        <TexteAccueil /><Shop />
      </div>
      <Footer />
    </>
  )
}

export default Layout
