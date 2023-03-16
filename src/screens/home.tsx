import { RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, Text } from 'react-native'
import DropdownNavigation from '../components/dropdown-nav'
import { useActions } from '../session/util-hooks/use-actions'
import { useSelector } from '../session/util-hooks/use-typed-selector'

type RootStackParamList = {
  Home: any
  Account: any
}
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
  route: RouteProp<RootStackParamList, 'Home'>
}

function Home({ navigation, route }: LoginScreenProps) {
  const { LogoutSession } = useActions()
  const { data, error, loading } = useSelector((state) => state.repositories)

  const onSelect = (index: string) => {
    console.log(index)
    if (index === 'upgrade') {
      navigation.navigate('Account')
    }
    if (index === 'logout') {
      LogoutSession()
    }
  }
  return (
    <>
      <DropdownNavigation onSelect={onSelect} options={['upgrade', 'logout']} />
    </>
  )
}

export default Home
