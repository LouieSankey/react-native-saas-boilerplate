import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { Button, Text } from 'react-native'
import { useActions } from './session/util-hooks/use-actions'
//make sure to import this correctly, maybe you should rename it?
import { useSelector } from './session/util-hooks/use-typed-selector'
import { SignUpScreen } from './screens/signUp'
import { LoginScreen } from './screens/login'
import Home from './screens/home'

import UpgradeOptionsWrapper from './screens/upgrade'

const Layout: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const { data, error, loading } = useSelector((state) => state.repositories)

  useEffect(() => {
    console.log('mobile session data', JSON.stringify(data, null, 2))
  }, [data])

  return (
    <>
      {data ? (
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name='Account' component={UpgradeOptionsWrapper} />
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
