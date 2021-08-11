import React, { useState, setState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/style.css'

import { handleLogin } from '../services/auth'

const Login = (state) => {
  state = {
    username: '',
    password: ''
  }

  const HandleUpdate = event => {
    useState({
      [event.target.name]: event.target.value
    })
  }
  const HandleSubmit = event => {
    event.preventDefault()
    handleLogin(useState)
  }

  // render() {
  //   if (isLoggedIn()) {
  //     navigate(`/app/profile`)
  //   }

  return (
    <>
      <BurgerMenu />
      <Header />
      <div className='login'>
        <form method='POST' onSubmit={HandleSubmit}>
          <h1>Connexion</h1>

          <label><b>Nom d'utilisateur</b></label>
          <input type='text' placeholder="Entrer le nom d'utilisateur" name='username' onChange={HandleUpdate} required />

          <label><b>Mot de passe</b></label>
          <input type='password' placeholder='Entrer le mot de passe' name='password' onChange={HandleUpdate} required />

          <input type='submit' id='submit' value='Se connecter' />

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
