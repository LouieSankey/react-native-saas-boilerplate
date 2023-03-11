/**
 * Returns the email validation error
 * @param  {String}  email   user email
 * @return {String}          email error
 */
const emailValidator = (email: string) => {
  let error = null

  if (!email || email.length === 0) {
    error = ''
  } else if (
    email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    error = 'Invalid email address'
  }
  return error
}

/**
 * Returns the password validation error
 * @param  {String}  password   user password
 * @return {String}             password error
 */
const passwordValidator = (password = '') => {
  let passwordError = null
  const regEx = RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  )
  if (!password || password.length === 0) {
    passwordError = 'Password is required'
  } else if (password.length < 8) {
    passwordError = 'Password must contain at least 8 characters'
  } else if (!regEx.test(password)) {
    passwordError =
      'Password must contain at least one letter, one number, and one special character (@$!%*?&)'
  }
  return passwordError
}

/**
 * Returns the confirm password validation error
 * @param  {String}  confirmPassword   user confirm password
 * @return {String}             confirm password  error
 */
const confirmPasswordValidator = (password = '', confirmPassword = '') => {
  let confirmPasswordError = null

  if (confirmPassword.length && password.length) {
    if (password !== confirmPassword) {
      confirmPasswordError = 'Confirm password does not match'
    }
  } else if (!password) {
    confirmPasswordError = 'No password to match'
  }

  return confirmPasswordError
}

/**
 * Returns the login password validation error
 * @param  {String}  loginPassword   user login password
 * @return {String}                  login password error
 */
const loginPasswordValidator = (password: string) => {
  let passwordError = ''

  if (!password || password.length === 0) {
    passwordError = 'Password is required'
  }
  return passwordError
}

/**
 * Returns the edit name validation error
 * @param  {String}  name   user edit name
 * @return {String}         edit name error
 */
const nameValidator = (name: string) => {
  let error = null
  if (!name || name.length === 0) {
    error = 'Name is required'
  } else if (name && !/^[a-zA-Z]*$/.test(name)) {
    error = 'Invalid name'
  } else if (!/[A-Z].*/.test(name)) {
    error = 'Must starts with capital case'
  } else if (name.split(' ').length > 1) {
    error = 'Invalid name'
  } else if (name.length < 3) {
    error = 'Username must contain atleast 3 characters'
  }
  return error
}

const loginEmailValidator = (email: string) => {
  let error = ''

  if (!email || email.length === 0) {
    error = ''
  } else if (
    email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    error = 'Invalid email address'
  }
  return error
}

export {
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  loginPasswordValidator,
  nameValidator,
  loginEmailValidator
}
