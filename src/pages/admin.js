import useFirebase from '../firebase'
import React, { useEffect, useState } from 'react'
import AdminTable from '../components/AdminTable'
import '../styles/style.css'

/* Je demande l'authentification pour ma page admin. Si je ne suis pas connecté je n'y est pas accès, sinon oui */

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
  if (user) {
    return (
      <>
        <button onClick={() => firebase.login()}>login</button>
        <button onClick={() => firebase.logout()}>logout</button>
        <div className='divAdmin'>
          <h1 className='adminTitle'>Bonjour {user && <h2>{user.displayName}</h2>}</h1>
        </div>
        <AdminTable user={user} />
      </>
    )
  }
}

export default Admin
