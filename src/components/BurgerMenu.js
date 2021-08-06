import React from 'react'
import '../styles/style.css'
import SearchIcon from '@material-ui/icons/Search'

const BurgerMenu = () => {
  return (
    <>
      <nav className='nav'>
        <div className='searchContainer'>
          <input type='search' />
          <button type='submit'><SearchIcon /></button>
        </div>
        <ul>
          <li><a href='#'> S'inscrire</a></li>
          <li><a href='#'> Se connecter</a></li>
        </ul>
      </nav>
    </>
  )
}

export default BurgerMenu
