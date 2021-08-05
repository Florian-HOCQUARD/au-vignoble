import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
    text-align: center;
    font-size: 5rem;
    margin: 0;
    background-color: transparent;
    padding-top: 3rem;
`

const Header = () => {
  return (
    <Title>Au Vignoble</Title>
  )
}

export default Header
