import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

//this should perfectly mock use Session in next-auth
export const useSession = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const sessionString = await AsyncStorage.getItem('session')
      if (sessionString !== null) {
        const session = JSON.parse(sessionString)
        setSession(session)
      }
    }
    getSession()
  }, [])

  const data = {
    user: session,
    expires: 'expiration date'
  }

  return { data, status: 'authenticated' }
}
