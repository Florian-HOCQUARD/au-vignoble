import React from 'react'
import '../styles/style.css'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import styled from 'styled-components'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'gatsby'

const button = styled.button`
    font-size: 10rem;;
`

const BurgerMenu = () => {
  return (
    <>

      <nav className='nav'>

        <form
          className='searchContainer' action='/'
          method='get'
          autoComplete='off'
        >
          <input type='text' />
          <button type='submit'><SearchIcon id='searchicon' /></button>
        </form>
        <label className='labelMenu' id='menuicon' for='toggle'><MenuIcon /></label>
        <input type='checkbox' id='toggle' />
        <div className='close-btn'>
          <ul>
            <Link id='home' to='/'><HomeIcon /></Link>
            <button id='account' class='snipcart-customer-signin'><AccountBoxIcon /></button>
            <button id='caddie' class='snipcart-checkout'><ShoppingCartIcon /></button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default BurgerMenu
