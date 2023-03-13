import AsyncStorage from '@react-native-async-storage/async-storage'
import { TokenResponse } from 'expo-auth-session'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import * as AuthSession from 'expo-auth-session'

// TODO this is duplicated and needs to be restructured
type Session = TokenResponse

export const UpdateSession = (session: Session) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_SESSION
    })

    //do something that may take some time here, like a network request. In the mean time
    //loading can be displayed with your selector
    try {
      const authData = JSON.stringify(session)
      AsyncStorage.setItem('session', authData).catch((error: any) => {
        console.log(error)
      })

      dispatch({
        type: ActionType.UPDATE_SESSION_SUCCESS,
        payload: session
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_SESSION_ERROR,
        payload: error.message
      })
    }
  }
}

export const LogoutSession = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      // Get the session from AsyncStorage
      const sessionString = await AsyncStorage.getItem('session')
      // Assert that the session object is of type TokenResponse
      const session: TokenResponse = JSON.parse(sessionString!)

      if (session) {
        await AuthSession.revokeAsync(
          {
            token: session.accessToken
          },
          {
            revocationEndpoint: 'https://oauth2.googleapis.com/revoke'
          }
        )

        await AsyncStorage.removeItem('session')
      }
      dispatch({
        type: ActionType.LOGOUT_SESSION
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.LOGOUT_SESSION_ERROR,
        payload: error.message
      })
    }
  }
}
