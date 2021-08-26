import React, { useState, useEffect } from 'react'
import '../styles/style.css'

const AdminTable = () => {
  const [messages, setMessages] = useState([])

  /* Ici je récupère dans ma page les messages envoyer depuis la page contact */
  useEffect(() => {
    const callApi = async () => {
      const url = `${process.env.GATSBY_URLAPI}/messages`
      const response = await window.fetch(url)
      const messages = await response.json()
      console.log(messages)
      setMessages(messages)
    }
    callApi()
  }, [])

  const handleChange = async (event, id) => {
    const value = event.target.checked
    console.log(value, id)
    const options = {
      method: 'PATCH',
      body: JSON.stringify({ isChecked: value }),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await window.fetch(`${process.env.GATSBY_URLAPI}/message/${id}`, options)
    const message = await response.json()
    const updateMessage = messages.filter((msg) => msg._id !== id)
    updateMessage.push(message)
    const timestamp = Date.now()

    setMessages(updateMessage)
    console.log('jhyghgvf', messages)

    // const index = messages.findIndex(message => message._id === id)
    // console.log(index)
    // const updateMessages = messages
    // updateMessages[index].isChecked = value
    // console.log(updateMessages)
    // setMessages(updateMessages)

    console.log(response)
  }

  const handleDelete = async (event, id) => {
    const value = event.target.delete
    console.log(value, id)
    const options = {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await window.fetch(`${process.env.GATSBY_URLAPI}/message/${id}`, options)
    console.log(response)
    const deleteMessage = messages.filter((msg) => msg._id !== id)
    setMessages(deleteMessage)
    console.log(deleteMessage)
  }

  if (!messages.length) return <p>chargement</p>

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
              /* Je boucle pour afficher un par un les messages et les infos qui vont avec */
              <tr key={msg._id}>
                <td>{msg.user_name}</td>
                <td>{msg.user_mail}</td>
                <td>{msg.user_message}</td>
                <td>
                  <input
                    type='checkbox' id='vuMessage' name='vu' onChange={(event) => handleChange(event, msg._id)}
                    checked={msg.isChecked}
                  />
                  <label htmlFor='check'>Vu</label>
                  <br />
                  <button className='deleteButton' onClick={(event) => handleDelete(event, msg._id)} name='delete' type='checkbox' id='deleteMessage'>❌</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default AdminTable
