import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text } from 'react-native'
import { logout, useSession } from './util/auth-hooks'
import { LoginScreen, SignUpScreen } from './util/screen-wrappers'

const Stack = createNativeStackNavigator()

const Home = () => {
  return (
    <>
      <Text>Hello</Text>
      <Button title='Logout' onPress={() => logout()}></Button>
    </>
  )
}

//I was getting an error for making this async, wtf???
export default function App() {
  const session = useSession()

  return (
    <NavigationContainer>
      {session ? (
        <Stack.Navigator>
          <Stack.Screen
            name='SignUp'
            component={Home}
            options={{ title: 'Sign Up' }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name='SignUp'
            component={SignUpScreen}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name='SignIn'
            component={LoginScreen}
            options={{ title: 'Sign In' }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
