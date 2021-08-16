import React, { useEffect, useState } from 'react'
import Header from './Header'
import BurgerMenu from './BurgerMenu'
import '../styles/style.css'
import 'sanitize.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [client, setClient] = useState('')
  useEffect(() => {
    /* eslint no-undef: "off" */
    const customer = Snipcart.store.getState().customer
    console.log(customer)
    window.localStorage.setItem('tokenClient', JSON.stringify(customer))
    setClient(customer)
    console.log(client)
    /* eslint no-undef: "off" */
    Snipcart.events.on('customer.signedin', (customer) => {
      console.log(customer)
      console.log(`Customer ${customer.email} just signed in.`)
    })
  })

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
