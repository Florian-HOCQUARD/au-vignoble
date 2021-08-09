import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import '../styles/style.css'

const Login = () => {
  return (
    <>
      <BurgerMenu />
      <div className='login'>
        <form method='POST'>
          <h1>Connexion</h1>

          <label><b>Nom d'utilisateur</b></label>
          <input type='text' placeholder="Entrer le nom d'utilisateur" name='username' required />

          <label><b>Mot de passe</b></label>
          <input type='password' placeholder='Entrer le mot de passe' name='password' required />

          <input type='submit' id='submit' value='Se connecter' />

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
