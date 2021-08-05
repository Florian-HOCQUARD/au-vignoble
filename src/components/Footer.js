import React from 'react'
import '../styles/style.css'
import styled from 'styled-components'

const Link = styled.a`
    color: white;
    text-decoration: none;
`

const Footer = () => {
  return (
    <>

      <div class='footer'>
        <Link href='#'>CGV</Link>
        <Link href='#'>A propos</Link>
        <Link href='#'>Qui sommes-nous?</Link>
      </div>

    </>
  )
}

export default Footer
