import { Session } from 'next-auth'

export interface IAuthProps {
  session: Session | null
  // reloadSession: () => void
}

//used in the useMutation hook for creating a user
export interface CreateUsernameData {
  createUsername: {
    success: boolean
    error: string
  }
}
export interface CreateUsernameVariables {
  username: string
}

export interface SignUpInput {
  password: String
  email: String
  stripeCustomerId?: String
  emailVerified?: String
}

export interface SignInInput {
  password: String
  email: String
}

export interface SignUpResponse {
  signUp: User
}

export interface SignInResponse {
  signIn: User
}

export interface CreateStripeCustomerIdInput {
  customerId: string | undefined
}

export interface CreateStripeCustomerIdResponse {
  createStripeCustomerId: {
    success: boolean
    error: string
  }
}

export interface User {
  id: string
  username: string
  email: string
  emailVerified: boolean
  image: string
  name: string
  stripeCustomerId: string
  // error: string
}
