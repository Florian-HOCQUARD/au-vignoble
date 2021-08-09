import React from 'react'
import styled from 'styled-components'
import '../styles/style.css'

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

const Header = () => {
  return (
    <Title>Au Vignoble</Title>
  )
}

export default Header
