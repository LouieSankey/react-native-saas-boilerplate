import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { Provider } from 'react-redux'
import Layout from './src/Layout'
import { store } from './src/session'
import { theme } from './src/shared/theme/customTheme'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Layout />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}
