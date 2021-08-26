import React, { useEffect, useState } from 'react'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
import '../styles/style.css'
import 'sanitize.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [client, setClient] = useState('')

  /* ici je viens récupérer le token du client pour le mettre dans le localStorage */
  useEffect(() => {
    /* eslint no-undef: "off" */
    const customer = Snipcart.store.getState().customer
    console.log(customer)
    window.localStorage.setItem('tokenClient', JSON.stringify(customer))
    setClient(customer)
    console.log(client)
  })

  return (
    <>

      <BurgerMenu />

      <Header />

      <div className='contentContainer'>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
