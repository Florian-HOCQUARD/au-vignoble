import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import '../styles/style.css'

const Inscription = () => {
  return (
    <>
      <BurgerMenu />
      <div className='inscription'>
        <form name='mon-formulaire1' action='page-envoi.html' method='get'>
          <p>
            <input type='radio' name='civi' value='Mme' /> Madame
            <input type='radio' name='civi' value='Mlle' /> Mademoiselle
            <input type='radio' name='civi' value='Mr' /> Monsieur
          </p>
          <p>
            Votre prénom :<br />
            <input type='text' name='prenom' value='' />
          </p>
          <p>
            Votre nom :<br />
            <input type='text' name='nom' value='' />
          </p>
          <p>
            Votre mot de passe :<br />
            <input type='password' name='passe' value='' />
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
