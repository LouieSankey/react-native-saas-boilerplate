import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import Constants from 'expo-constants'

let API_URL: string
if (process.env.NODE_ENV === 'development') {
  console.log()
  API_URL = Constants?.expoConfig?.extra?.DEV_API!
} else {
  API_URL = Constants?.expoConfig?.extra?.PROD_API!
}

const httpLink = new HttpLink({
  uri: API_URL,
  credentials: 'include'
})
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
