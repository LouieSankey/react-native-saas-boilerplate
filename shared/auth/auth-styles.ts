// @ts-ignore
import { StyleSheet } from 'react-native-alias'
import { BorderRadii, Colors, FontSizes } from '../ui/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.white
  },

  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: FontSizes.xlarge,
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: BorderRadii.small,
    marginBottom: 10,
    width: '100%'
  },
  inputLabelText: {
    paddingBottom: 5,
    marginBottom: 10
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10
  },
  showPasswordButton: {
    padding: 5
  },
  showPasswordIcon: {
    width: 20,
    height: 20
  },
  submitButtonContainer: {
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: BorderRadii.small,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%'
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: FontSizes.large
  },
  googleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: BorderRadii.small,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    marginBottom: 10,
    width: '100%'
  },
  googleButtonText: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.darkGrey,
    marginLeft: 10
  },
  googleButtonIcon: {
    width: 20,
    height: 20
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end'
  },
  forgotPasswordText: {
    color: Colors.blue,
    fontSize: FontSizes.medium
  },
  orDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  orDivider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightGrey
  },
  orDividerText: {
    paddingHorizontal: 10,
    fontSize: FontSizes.medium,
    color: Colors.gray
  },

  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  signupText: {
    marginRight: 5,
    fontSize: FontSizes.medium,
    color: Colors.darkGrey
  },
  signupLink: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.blue
  }
})

export default styles
