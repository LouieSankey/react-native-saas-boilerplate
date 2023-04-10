import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import * as AuthSession from 'expo-auth-session'
import { Session } from '../../../globalTypes/types'

//! destructure this from useActions instead of using directly
export const UpdateSession = (session: Session) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_SESSION
    })
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
      const session: Session = JSON.parse(sessionString!)

      if (session.accessToken) {
        await AuthSession.revokeAsync(
          {
            token: session.accessToken!
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
//not sure where I should put this fn
export const useSession = () => {
  // const sessionString = await AsyncStorage.getItem('session')
  // const session: Session = await JSON.parse(sessionString!)
  return 'hello'
}
