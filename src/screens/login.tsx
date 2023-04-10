import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
import { useActions } from '../session/util-hooks/use-actions'
import { client } from '../shared/graphql/apollo-client'
import Operations from '../shared/graphql/operations/index'
import Login from '../shared/screens/login'

import {
  SignInInput,
  SignInResponse,
  SignUpInput,
  SignUpResponse
} from '../shared/sharedUtils/types'
import GoogleAuth from '../../google-auth'

type RootStackParamList = {
  SignIn: any
  SignUp: any
}
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>
  route: RouteProp<RootStackParamList, 'SignIn'>
}

export function LoginScreen({ navigation, route }: LoginScreenProps) {
  //passing this through as props so that I can keep the sign in and login components as shared
  const { request, response, promptAsync } = GoogleAuth()
  const [error, setError] = useState(null)
  const { UpdateSession } = useActions()

  const onSubmit = async (
    event: React.FormEvent,
    email: string,
    password: string
  ) => {
    event.preventDefault()

    //the graphql mutation here, it should return user or an error that can be passed to auth error
    try {
      const signIn = Operations.Mutations.signIn
      const response = await client.mutate<SignInResponse, SignInInput>({
        mutation: signIn,
        variables: {
          email: email.toLowerCase(),
          password: password
        }
      })

      const { data } = response
      const user = data?.signIn
      if (user) {
        UpdateSession(user)
      }
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <Login
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signInGoogle={promptAsync}
      onSubmit={onSubmit}
      authError={error}
    />
  )
}
