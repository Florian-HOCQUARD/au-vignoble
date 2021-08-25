import useFirebase from '../firebase'
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const firebase = useFirebase()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!firebase) return

    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      console.log(user)
      setUser(user)
    })

    return () => unsubscribe()
  }, [firebase])

  if (!firebase) return <p>chargement</p>

  if (!user) return <p>Il faut être connecté<button onClick={() => firebase.login()}>login</button></p>

  return (
    <>
      <h1>Bonjour {user && <h1>{user.displayName}</h1>}</h1>
      <button onClick={() => firebase.login()}>login</button>
      <button onClick={() => firebase.logout()}>logout</button>
    </>
  )
}

export default Admin
