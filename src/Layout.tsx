import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { useActions } from './session/util-hooks/use-actions'
//make sure to import this correctly, maybe you should rename it?
import { useSelector } from './session/util-hooks/use-typed-selector'
import { SignUpScreen } from './screens/signUp'
import { LoginScreen } from './screens/login'
import Home from './screens/home'
import 'react-native-gesture-handler'
import { Global, css, ThemeProvider, Theme } from '@emotion/react'
import UpgradeOptionsWrapper from './screens/pricing'
import AppContext from './shared/context/appContext'
import { dayTheme } from './shared/ui/theme/dayTheme'
import { nightTheme } from './shared/ui/theme/nightTheme'

const Layout: React.FC = () => {
  const Stack = createNativeStackNavigator()
  const { data, error, loading } = useSelector((state) => state.repositories)
  const [theme, setTheme] = useState('day')

  useEffect(() => {
    console.log('mobile session data', JSON.stringify(data, null, 2))
  }, [data])

  function toggleTheme() {
    setTheme(theme === 'day' ? 'night' : 'day')
  }

  return (
    <>
      <AppContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={theme === 'day' ? dayTheme : nightTheme}>
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
        </ThemeProvider>
      </AppContext.Provider>
    </>
  )
}

export default Layout
