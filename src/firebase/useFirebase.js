import { useEffect, useState } from 'react'
import getFirebase from './firebase'

export default function useFirebase () {
  const [firebase, setFirebase] = useState(null)

  useEffect(() => {
    setFirebase(getFirebase())
  }, [])

  return firebase
}
