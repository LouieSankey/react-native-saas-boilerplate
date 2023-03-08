import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './shared/auth/login'

export default function App() {
  return (
    <View style={styles.container}>
      {<Login imgSrc={require('./shared/images/google.png')} mobile={true} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
