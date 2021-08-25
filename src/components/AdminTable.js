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
                <td>{msg.user_message}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default AdminTable
