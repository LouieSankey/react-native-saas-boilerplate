import { createStyled } from '@emotion/primitives-core'
import { Box, Input, Text } from 'native-base'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { withTouchableText } from '../ui/styled-component-wrappers'

export const mobileAuthStyles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

export const webAuthStyles = StyleSheet.create({
  container: {
    width: '400px',
    paddingTop: 20,
    paddingBottom: 20
  }
})

const styled = createStyled(StyleSheet)

export const AuthContainer = styled(Box)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`

export const Header = styled(Box)`
  align-items: center;
  margin-bottom: 20px;
`

export const HeaderText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`

export const FormErrorMessage = styled(Text)`
  margin-top: -6px;
  margin-bottom: 10px;
  color: 'red;
`

export const InputContainer = styled(Box)`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: lightGrey;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
`

export const InputHelperText = styled(Text)`
  color: grey;
  margin-bottom: 20px;
  font-size: 12px;
`

export const InputLabelText = styled(Text)`
  padding-bottom: 5px;
  margin-top: 10px;
`

export const CustomInput = styled(Input)`
  flex: 1;
  font-size: 16px;
`

export const ShowPasswordButton = styled(TouchableOpacity)`
  padding: 5px;
`

export const ShowPasswordIcon = styled(Image)`
  width: 20px;
  height: 20px;
`

export const GoogleButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: -6px;
  margin-bottom: -4px;
`

export const ForgotPasswordContainer = styled(Box)`
  align-items: flex-end;
`

export const ForgotPasswordText = styled(withTouchableText)`
  color: red;
  font-size: 12px;
  margin-top: 10px;
`

export const OrDividerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const OrDivider = styled(View)`
  flex: 1;
  height: 1px;
  background-color: lightGrey;
`

export const OrDividerText = styled(Text)`
  padding-horizontal: 10px;
  font-size: 16px;
  color: darkGrey;
`

export const SignupContainer = styled(Box)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const SignupText = styled(Text)`
  margin-right: 5px;
  font-size: 16px;
`

export const SignupLink = styled(withTouchableText)`
  color: #007aff;
  font-size: 16px;
`

export const VerticalSpacer = styled(Box)`
  height: 20px;
`
