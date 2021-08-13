import React from 'react'
import '../styles/style.css'
// import styled from 'styled-components'
import { Link } from 'gatsby'

// const Links = styled.a`
//     color: white;
//     text-decoration: none;
// `

const Footer = () => {
  return (
    <>

      <nav className='footer'>
        <Link to='/cgv'>CGV</Link>
        <Link to='/about'>A propos</Link>
        <Link to='/quisommes'>Qui sommes-nous?</Link>
      </nav>

    </>
  )
}

export default Footer
