import { navigate } from 'gatsby'
import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import '../styles/style.css'
const Contact = () => {
  console.log(process.env.GATSBY_URLAPI)
  const [message, setMessage] = useState({
    user_name: '',
    user_mail: '',
    user_message: ''
  })

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setMessage({
      ...message,
      [name]: value
    })
  }

  /* Ici je fetch l'API pour lui renvoyer une méthode POST qui permet d'envoyer des messages */
  const handleSubmit = async (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await window.fetch(`${process.env.GATSBY_URLAPI}/sendMessage`, options)

    const data = await response.json()
    console.log(data)
    setMessage('')
  }

  const returnHome = () => {
    navigate('/')
  }

  return (
    <>
      <BurgerMenu />
      <MainContent />
      <h1 className='contactTitle'>Contactez nous !</h1>
      <div className='formContact'>
        <form onSubmit={handleSubmit} className='contactForm' action='' method='post'>
          <div>
            <label className='contactName' htmlFor='name'>Nom :</label>
            <input onChange={handleChange} value={message.user_name} type='text' id='name' name='user_name' />
          </div>
          <div>
            <label className='contactEmail' htmlFor='mail'>e-mail:</label>
            <input onChange={handleChange} value={message.user_mail} type='email' id='mail' name='user_mail' />
          </div>
          <div>
            <label className='contactText' htmlFor='msg'>Message :</label>
            <textarea onChange={handleChange} value={message.user_message} id='msg' name='user_message' />
          </div>
          <div className='contactButton'>
            <button type='submit' id='buttonContact' onClick={returnHome}>Envoyer le message</button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Contact
