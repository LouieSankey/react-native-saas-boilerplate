import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image
  // @ts-ignore
} from 'react-native-alias'
import styles from './auth-styles'
// @ts-ignore
import { createStyled } from '@emotion/primitives-core'

const styled = createStyled(StyleSheet)

import { Colors, FontSizes, BorderRadii } from '../ui/constants'

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  background-color: ${Colors.white};
`

const Header = styled(View)`
  align-items: center;
  margin-bottom: 20px;
`

const HeaderText = styled(Text)`
  font-size: ${FontSizes.xlarge}px;
  font-weight: bold;
`

const Form = styled(View)`
  width: 100%;
  margin-bottom: 20px;
`

const InputContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${Colors.lightGrey};
  border-radius: ${BorderRadii.small}px;
  margin-bottom: 10px;
  width: 100%;
`

const InputLabelText = styled(Text)`
  padding-bottom: 5px;
  margin-bottom: 10px;
`

const Input = styled(TextInput)`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
`

const ShowPasswordButton = styled(TouchableOpacity)`
  padding: 5px;
`

const ShowPasswordIcon = styled(Image)`
  width: 20px;
  height: 20px;
`

const SubmitButtonContainer = styled(TouchableOpacity)`
  background-color: ${Colors.blue};
  padding: 10px;
  border-radius: ${BorderRadii.small}px;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`

const SubmitButtonText = styled(Text)`
  color: ${Colors.white};
  font-size: ${FontSizes.large}px;
`

const GoogleButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
  padding: 10px;
  border-radius: ${BorderRadii.small}px;
  border-color: ${Colors.lightGrey};
  border-width: 1px;
  margin-bottom: 10px;
  width: 100%;
`

const GoogleButtonText = styled(Text)`
  font-size: ${FontSizes.medium}px;
  font-weight: bold;
  color: ${Colors.darkGrey};
  margin-left: 10px;
`

const GoogleButtonIcon = styled(Image)`
  width: 20px;
  height: 20px;
`

const ForgotPasswordContainer = styled(View)`
  align-items: flex-end;
`

const ForgotPasswordText = styled(Text)`
  color: ${Colors.blue};
  font-size: ${FontSizes.medium}px;
`

const OrDividerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

const OrDivider = styled(View)`
  flex: 1;
  height: 1px;
  background-color: ${Colors.lightGrey};
`

const OrDividerText = styled(Text)`
  padding-horizontal: 10px;
  font-size: ${FontSizes.medium}px;
  color: ${Colors.gray};
`

const SignupContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`

const SignupText = styled(Text)`
  margin-right: 5px;
  font-size: ${FontSizes.medium}px;
`

const Login = ({
  mobile,
  imgSrc
}: {
  mobile: boolean
  imgSrc: string | [number]
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isError = false // TODO: add error handling

  const onSubmit = async (event: any) => {
    event.preventDefault()
    // TODO: handle form submission
  }

  return (
    <View
      style={[
        styles.container,
        mobile ? mobileStyles.container : webStyles.container
      ]}
    >
      <Header>
        <HeaderText>Sign in</HeaderText>
      </Header>
      <Form>
        <InputLabelText>Email</InputLabelText>
        <InputContainer>
          <Input
            value={email}
            onChangeText={(text: React.SetStateAction<string>) =>
              setEmail(text)
            }
          />
        </InputContainer>
        <InputLabelText>Password</InputLabelText>
        <InputContainer>
          <Input
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text: React.SetStateAction<string>) =>
              setPassword(text)
            }
          />
          <ShowPasswordButton onPress={() => setShowPassword(!showPassword)}>
            {/* <ShowPasswordIcon
              source={
                showPassword
                  ? require('../images/eye-open.svg')
                  : require('../images/eye-close.svg')
              }
            /> */}
          </ShowPasswordButton>
        </InputContainer>
        <SubmitButtonContainer onPress={onSubmit}>
          <SubmitButtonText>Sign in</SubmitButtonText>
        </SubmitButtonContainer>
        <ForgotPasswordContainer>
          <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
        </ForgotPasswordContainer>
      </Form>
      <OrDividerContainer>
        <OrDivider />
        <OrDividerText>OR</OrDividerText>
        <OrDivider />
      </OrDividerContainer>
      <GoogleButtonContainer>
        <GoogleButtonIcon source={imgSrc} />
        <GoogleButtonText>Continue with Google</GoogleButtonText>
      </GoogleButtonContainer>
      <SignupContainer>
        <SignupText>Need an account?</SignupText>
      </SignupContainer>

      {/* <TouchableOpacity style={styles.googleButtonContainer}>
        <Image source={imgSrc} style={styles.googleButtonIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Need an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>SIGN UP</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const mobileStyles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

const webStyles = StyleSheet.create({
  container: {
    width: '300pt',
    borderRadius: BorderRadii.medium,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default Login
