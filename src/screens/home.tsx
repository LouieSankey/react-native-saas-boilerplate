import { RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useContext, useState } from 'react'
//@ts-ignore
import { Button, Switch, Text, View } from 'react-native'
import DropdownNavigation from '../components/dropdown-nav'
import { useActions } from '../session/util-hooks/use-actions'
import { useSelector } from '../session/util-hooks/use-typed-selector'
import AppContext from '../shared/context/appContext'
import { useTheme } from '@emotion/react'
import ColorModeSwitch from '../shared/components/colorModeSwitch'
import { Box, VStack } from 'native-base'

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

  const onSelect = (index: string) => {
    if (index === 'upgrade') {
      navigation.navigate('Account')
    }
    if (index === 'logout') {
      LogoutSession()
    }
  }
  return (
    <>
      <Box
        h='100%'
        _dark={{
          bg: 'coolGray.800'
        }}
        _light={{
          bg: 'warmGray.50'
        }}
      >
        <DropdownNavigation
          onSelect={onSelect}
          options={['upgrade', 'logout']}
        />
        <Box>
          <ColorModeSwitch />
        </Box>
      </Box>
    </>
  )
}

export default Home
