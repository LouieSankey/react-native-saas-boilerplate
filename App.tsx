import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import Layout from './src/Layout'
import { store } from './src/session'

//I was getting an error for making this async, wtf???
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </Provider>
  )
}
