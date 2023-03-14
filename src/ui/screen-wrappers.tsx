import { ApolloError } from '@apollo/client'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
// import { UpdateSession } from '../session/action-creators'
import { useActions } from '../session/util-hooks/use-actions'
import Login from '../shared/auth/login'
import SignUp from '../shared/auth/signup'
import { client } from '../shared/graphql/apollo-client'
import UserOperations from '../shared/graphql/operations/user'
import {
  SignInInput,
  SignInResponse,
  SignUpInput,
  SignUpResponse
} from '../shared/util/types'
// import Login from './shared/auth/login'
import GoogleAuth from '../util/google-auth'

type RootStackParamList = {
  SignIn: any
  SignUp: any
}

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>
  route: RouteProp<RootStackParamList, 'SignIn'>
}

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>
  route: RouteProp<RootStackParamList, 'SignUp'>
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
      const signIn = UserOperations.Mutations.signIn
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

export const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
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
    console.log(email, password)
    //the graphql mutation here, it should return user or an error that can be passed to auth error
    const signUp = UserOperations.Mutations.signUp
    const signUpResponse = await client.mutate<SignUpResponse, SignUpInput>({
      mutation: signUp,
      variables: {
        email: email.toLowerCase(),
        password: password
        // stripeCustomerId: newCustomer.id
      }
    })

    const { data } = signUpResponse
    const user = data?.signUp
    if (user) {
      UpdateSession(user)
    } else {
      setError(error)
    }
  }

  return (
    <SignUp
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signUpGoogle={promptAsync}
      onSubmit={onSubmit}
      authError={error}
    />
  )
}
