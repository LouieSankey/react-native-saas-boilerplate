import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login from '../shared/auth/login'
import SignUp from '../shared/auth/signup'
// import Login from './shared/auth/login'
import { useEffect, useState } from 'react'
import GoogleAuth from './google-auth'
import { persistAuth } from './auth-hooks'

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
  const { request, response, promptAsync } = GoogleAuth()

  return (
    <Login
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signInGoogle={promptAsync}
      request={request}
    />
  )
}

export const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState(null)

  const { request, response, promptAsync } = GoogleAuth()

  useEffect(() => {
    if (response?.type === 'success') {
      // setToken(response.authentication.accessToken)
      // getUserInfo()
    }
  }, [response, token])

  return (
    <SignUp
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signUpGoogle={promptAsync}
      request={request}
    />
  )
}
