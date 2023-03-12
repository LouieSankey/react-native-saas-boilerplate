import { useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'

import AsyncStorage from '@react-native-async-storage/async-storage'

interface Session {
  accessToken: string
  expiresIn: string
  issuedAt: number
  scope: string
  state: string
  tokenType: string
}

export const persistAuth = (response: AuthSession.AuthSessionResult) => {
  if (response.type === 'success') {
    const authData = JSON.stringify(response.authentication)
    AsyncStorage.setItem('session', authData).catch((error: any) => {
      console.log(error)
    })
  }
}

export const logout = async () => {
  const session = useSession()
  if (session) {
    await AuthSession.revokeAsync(
      {
        token: session.accessToken
      },
      {
        revocationEndpoint: 'https://oauth2.googleapis.com/revoke'
      }
    )

    await AsyncStorage.removeItem('session')
  }
}
//a custom hook example
export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null)
  //use effect gets called when the component using the hook mounts
  useEffect(() => {
    const getSession = async () => {
      const sessionString = await AsyncStorage.getItem('session')
      if (sessionString) {
        const sessionData = await JSON.parse(sessionString)
        setSession(sessionData)
      }
    }
    getSession()
  }, [])

  return session
}
