import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/style.css'

const Inscription = () => {
  return (
    <>
      <BurgerMenu />
      <Header />
      <div className='inscription'>
        <form name='mon-formulaire1' netlify-honeypot='bot-field' data-netlify='true' method='post'>
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <input type='radio' name='civi' value='Mme' /> Madame
            <input type='radio' name='civi' value='Mlle' /> Mademoiselle
            <input type='radio' name='civi' value='Mr' /> Monsieur
          </p>
          <p>
            Votre prénom :<br />
            <input type='text' name='prenom' />
          </p>
          <p>
            Votre nom :<br />
            <input type='text' name='nom' />
          </p>
          <p>
            Votre mot de passe :<br />
            <input type='password' name='passe' />
          </p>
          <p>
            Vous êtes<br />
            <select name='profil'>
              <option value='parti'>Un particulier</option>
              <option value='profe' selected='selected'>Un professionnel</option>
            </select>
          </p>
          <p>
            Votre message :<br />
            <textarea name='le-message' rows='6' cols='40' />
          </p>
          <p>
            <input type='submit' value='Envoyer' />
            <input type='reset' value='Annuler' />
          </p>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Inscription
