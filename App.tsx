import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { Provider } from 'react-redux'
import Layout from './src/Layout'
import { store } from './src/session'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Layout />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}
