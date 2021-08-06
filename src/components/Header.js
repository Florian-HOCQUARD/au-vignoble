import React from 'react'
import styled from 'styled-components'
import '../styles/style.css'

const Title = styled.h1`
    background:-webkit-linear-gradient(top, red 20%, grey 80%);
    background-clip:text;
    -webkit-background-clip:text;
    color:transparent;
    text-align: center;
    font-size: 8rem;
    margin: 0;
    background-color: transparent;
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-family: 'Roboto Slab';
`

const Header = () => {
  return (
    <Title>Au Vignoble</Title>
  )
}

export default Header
