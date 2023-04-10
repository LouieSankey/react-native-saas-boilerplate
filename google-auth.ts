import { useLazyQuery, useMutation } from '@apollo/client'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'
import { Session, User } from './globalTypes/types'
import { useActions } from './src/session/util-hooks/use-actions'
import { client } from './src/shared/graphql/apollo-client'
import Operations from './src/shared/graphql/operations/index'
import {
  GetUserInput,
  GetUserResponse,
  SignUpInput,
  SignUpResponse
} from './src/shared/sharedUtils/types'

const GoogleAuth = () => {
  const { UpdateSession } = useActions()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '135427563097-i3nhnp8mvrgmoq542291jcnrls7tngqb.apps.googleusercontent.com',
    iosClientId:
      '135427563097-4d705hiurl7aougc45got0tdn8ot560t.apps.googleusercontent.com',
    expoClientId:
      '135427563097-gco1a99g49luj4pk849h9oeei3ubcu1q.apps.googleusercontent.com'
  })

  //you should only ever get to this point if you're not automatically logged in
  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        // UpdateSession(response.authentication!)
        getUserInfo(response.authentication!.accessToken, UpdateSession)
      }
    }
  }, [response])

  return {
    request,
    response,
    promptAsync
  }
}

const getUserInfo = async (token: string, UpdateSession: any) => {
  //first get the user email from google api
  let userInfoResponse = await fetch(
    'https://www.googleapis.com/userinfo/v2/me',
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
  //get the user info from google
  const googleInfo = await userInfoResponse.json()

  try {
    const { data } = await client.query<GetUserResponse, GetUserInput>({
      query: Operations.Queries.getUser,
      variables: {
        email: googleInfo.email
      }
    })
    const user = data?.getUser
    UpdateSession(user)
  } catch (error) {
    const { data } = await client.mutate<SignUpResponse, SignUpInput>({
      //you might needs to expand this to include all google sign up fields
      mutation: Operations.Mutations.signUp,
      variables: {
        email: googleInfo.email,
        password: 'password'
      }
    })
    const user = data?.signUp
    UpdateSession({ user: user })
  }
}

export default GoogleAuth
