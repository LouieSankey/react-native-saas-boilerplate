import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
import { useActions } from '../session/util-hooks/use-actions'
import SignUp from '../shared/screens/signUp'
import { client } from '../shared/graphql/apollo-client'
import UserOperations from '../shared/graphql/operations/user'
import { SignUpInput, SignUpResponse } from '../shared/util/types'
import GoogleAuth from '../util/google-auth'

type RootStackParamList = {
  SignIn: any
  SignUp: any
}

type SignUpScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>
  route: RouteProp<RootStackParamList, 'SignUp'>
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
