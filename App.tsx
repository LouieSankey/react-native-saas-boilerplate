import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import Layout from './src/layout'
import { store } from './src/session'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </Provider>
  )
}
