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
    font-size: 10rem;
    margin: 0;
    background-color: transparent;
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-family: 'Roboto Slab';
    @media all and (max-width: 991px){
      font-size: 8rem;
    }
`
const StyledLink = styled(Link)`
&:hover{
text-decoration: none;
}
`

const Header = () => {
  return (
    <StyledLink to='/'><Title>Au Vignoble</Title></StyledLink>
  )
}

export default Header
