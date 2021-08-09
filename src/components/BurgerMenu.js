import React from 'react'
import '../styles/style.css'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'gatsby'

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
            <li><Link to='/inscription'> S'inscrire</Link></li>
            <li><Link to='/login'> Se connecter</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default BurgerMenu
