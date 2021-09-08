import React from 'react'
import styled from 'styled-components'
import '../styles/style.css'
import { Link } from 'gatsby'

const Title = styled.h1`
    background:-webkit-linear-gradient(top, white 20%, grey 80%);
    background-clip:text;
    -webkit-background-clip:text;
    color:transparent;
    text-align: center;
    font-size: 6rem;
    margin: 0;
    background-color: transparent;
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-family: 'Roboto Slab';

`
const StyledLink = styled(Link)`
&:hover{
text-decoration: none;
}
`

const Header = () => {
  return (
    <>
      <StyledLink to='/'><Title>Au Vignoble</Title></StyledLink>
      <h2>Site en construction</h2>
    </>
  )
}

export default Header
