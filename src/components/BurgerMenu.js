import React from 'react'
import '../styles/style.css'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styled from 'styled-components'

const button = styled.button`
    font-size: 10rem;;
`

const BurgerMenu = () => {
  return (
    <>

      <nav className='nav'>

        <div className='searchContainer'>
          <input type='search' />
          <button type='submit'><SearchIcon /></button>
        </div>
        <label for='toggle'><MenuIcon /></label>
        <input type='checkbox' id='toggle' />
        <div className='close-btn'>
          <ul>
            <button class='snipcart-customer-signin'>Mon compte</button>
            <button class='snipcart-checkout'><ShoppingCartIcon /></button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default BurgerMenu
