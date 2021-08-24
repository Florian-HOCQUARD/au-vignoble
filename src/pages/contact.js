import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import '../styles/style.css'

const Contact = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify(message),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await window.fetch('http://localhost:3000/sendMessage', options)
    const data = await response.json()
    console.log(data)
    setMessage('')
  }

  return (
    <>
      <BurgerMenu />
      <h1 className='contactTitle'>Contactez nous !</h1>
      <div className='formContact'>
        <form onSubmit={handleSubmit} className='contactForm' action='' method='post'>
          <div>
            <label className='contactName' for='name'>Nom :</label>
            <input onChange={handleChange} value={message.user_name} type='text' id='name' name='user_name' />
          </div>
          <div>
            <label className='contactEmail' for='mail'>e-mail :</label>
            <input onChange={handleChange} value={message.user_mail} type='email' id='mail' name='user_mail' />
          </div>
          <div>
            <label className='contactText' for='msg'>Message :</label>
            <textarea onChange={handleChange} value={message.user_message} id='msg' name='user_message' />
          </div>
          <div className='contactButton'>
            <button type='submit' id='buttonContact'>Envoyer le message</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact
