import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Profile = () => (
  <>
    <BurgerMenu />
    <Header />
    <h1>Ton profil</h1>
    <ul>
      <li>Name: </li>
      <li>E-mail: </li>
      <li>Tes achats: </li>
    </ul>
    <Footer />
  </>
)

export default Profile
