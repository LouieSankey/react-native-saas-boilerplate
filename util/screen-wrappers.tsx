import { Button, Text } from 'react-native'
import { RouteProp, NavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login from '../shared/auth/login'
import SignUp from '../shared/auth/signup'
// import Login from './shared/auth/login'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect, useState } from 'react'
import { makeRedirectUri } from 'expo-auth-session'

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

function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '135427563097-i3nhnp8mvrgmoq542291jcnrls7tngqb.apps.googleusercontent.com',
    iosClientId:
      '135427563097-4d705hiurl7aougc45got0tdn8ot560t.apps.googleusercontent.com',
    expoClientId:
      '135427563097-gco1a99g49luj4pk849h9oeei3ubcu1q.apps.googleusercontent.com',
    redirectUri: makeRedirectUri({
      scheme: 'boilerplate'
    })
  })

  return {
    request,
    response,
    promptAsync
  }
}

export function LoginScreen({ navigation, route }: LoginScreenProps) {
  const { request, promptAsync } = useGoogleAuth()

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
  const { request, response, promptAsync } = useGoogleAuth()
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState(null)

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
