import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login from '../shared/auth/login'
import SignUp from '../shared/auth/signup'
// import Login from './shared/auth/login'
import GoogleAuth from './google-auth'

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

  return (
    <Login
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signInGoogle={promptAsync}
    />
  )
}

export const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
  //passing this through as props so that I can keep the sign in and login components as shared
  const { request, response, promptAsync } = GoogleAuth()

  return (
    <SignUp
      imgSrc={require('../shared/images/google.png')}
      mobile={true}
      navigation={navigation}
      signUpGoogle={promptAsync}
    />
  )
}
