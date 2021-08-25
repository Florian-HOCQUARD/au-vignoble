import app from 'firebase/app'
import 'firebase/auth'
import config from './config'

let firebase = null

class Firebase {
  constructor () {
    app.initializeApp(config)
    this.auth = app.auth()
    this.googleProvider = new app.auth.GoogleAuthProvider()
  }
  login = () => {
      this.auth.signInWithPopup(this.googleProvider)
  }

  logout = () => {
      this.auth.signOut()
  }
}

export default function getFirebase() {
    if (typeof window !== 'undefined') {
      if (firebase) return firebase
      firebase = new Firebase()
      return firebase
    }
  
    return null
  }
