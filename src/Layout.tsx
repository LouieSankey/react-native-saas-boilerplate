import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text } from 'react-native'
import { useActions } from './session/util-hooks/use-actions'
//make sure to import this correctly, maybe you should rename it?
import { useSelector } from './session/util-hooks/use-typed-selector'
import { LoginScreen, SignUpScreen } from './util/screen-wrappers'

const Layout: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const { data, error, loading } = useSelector((state) => state.repositories)

  return (
    <>
      {data ? (
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
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
    </>
  )
}

export default Layout

const Home = () => {
  const { LogoutSession } = useActions()

  return (
    <>
      <Text>Hello</Text>
      <Button title='Logout' onPress={() => LogoutSession()}></Button>
    </>
  )
}
