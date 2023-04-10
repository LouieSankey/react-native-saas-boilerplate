import { RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useContext, useState } from 'react'
//@ts-ignore
import { Button, Switch, Text, View } from 'react-native-alias'
import DropdownNavigation from '../components/dropdown-nav'
import { useActions } from '../session/util-hooks/use-actions'
import { useSelector } from '../session/util-hooks/use-typed-selector'
import AppContext from '../shared/context/appContext'
import { useTheme } from '@emotion/react'

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
  const theme = useTheme()
  const { toggleTheme } = useContext(AppContext)
  const [isChecked, setIsChecked] = useState(false)

  function handleChange(event: any) {
    setIsChecked((isChecked) => !isChecked)
    toggleTheme()
  }

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
      <View
        style={{ flex: 1, backgroundColor: theme.colors.backgroundPrimary }}
      >
        <Switch onValueChange={handleChange} value={isChecked} />
        <DropdownNavigation
          onSelect={onSelect}
          options={['upgrade', 'logout']}
        />
      </View>
    </>
  )
}

export default Home
