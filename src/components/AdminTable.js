import React, { useState, useEffect } from 'react'
import '../styles/style.css'

const AdminTable = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost:3000/messages'
      const response = await window.fetch(url)
      const messages = await response.json()
      console.log(messages)
      setMessages(messages)
    }
    callApi()
  }, [])

  const handleChange = (event, id) => {
    const value = event.target.checked
    console.log(value, id)
    const options = {
      method: 'PATCH',
      body: JSON.stringify(value),
      headers: { 'Content-Type': 'application/json' }
    }
    console.log(options)
  }

  return (
    <>
      <h1 className='titleTable'>Messages reçus</h1>
      <div>
        <table className='msgTable'>
          <caption>Liste des messages reçus</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th className='mailTable'>Mail</th>
              <th>Message</th>
            </tr>
          </thead>
          {messages.map((msg) => {
            return (

              <tr key={msg}>
                <td>{msg.user_name}</td>
                <td>{msg.user_mail}</td>
                <td>{msg.user_message}</td><input
                  type='checkbox' id='vuMessage' name='vu' onChange={(event) => handleChange(event, msg._id)}
                                           />
                <label for='scales'>Vu</label>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default AdminTable
