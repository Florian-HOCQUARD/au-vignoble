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
        <form name='mon-formulaire1' data-netlify='true' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <input type='radio' name='civi' value='Mme' /> Madame
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

// export default class Inscription extends React.Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     password: "",
//     email: ""
//   }
//   handleInputChange = event => {
//     const target = event.target
//     const value = target.value
//     const name = target.name
//     this.setState({
//       [name]: value,
//     })
//   }
//   handleSubmit = event => {
//     event.preventDefault()
//     window.location='/login'
//   }
//   render() {
//     return (
//       <>
//       <BurgerMenu />
//     <Header />
//     <div className='inscription'>
//       <form onSubmit={this.handleSubmit}>

//           Prénom
//           <input
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handleInputChange}
//           />

//           Nom de famille
//           <input
//             type="text"
//             name="lastName"
//             value={this.state.lastName}
//             onChange={this.handleInputChange}
//           />

//           Mot de passe
//           <input
//             type="password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//           />

//           Email
//           <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//           />
//         <button type="submit">Submit</button>
//       </form>
//       </div>
//       <Footer />
//       </>
//     )
//   }
// }

export default Inscription
