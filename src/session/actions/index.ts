//as our app grows we would want to create more files in this directory for different types of actions
// import { TokenResponse } from 'expo-auth-session'
import { Session } from '../../util/sharedTypes/types'
import { ActionType } from '../action-types'

interface UpdateSessionAction {
  type: ActionType.UPDATE_SESSION
}
interface UpdateSessionSuccessAction {
  type: ActionType.UPDATE_SESSION_SUCCESS
  payload: Session
}
interface UpdateSessionErrorAction {
  type: ActionType.UPDATE_SESSION_ERROR
  payload: null
}
interface LogoutSessionAction {
  type: ActionType.LOGOUT_SESSION
}
interface LogoutSessionSuccessAction {
  type: ActionType.LOGOUT_SESSION_SUCCESS
  payload: Session
}
interface LogoutSessionErrorAction {
  type: ActionType.LOGOUT_SESSION_ERROR
  payload: null
}

//instead of writing all this out after action
export type Action =
  | UpdateSessionAction
  | UpdateSessionSuccessAction
  | UpdateSessionErrorAction
  | LogoutSessionAction
  | LogoutSessionSuccessAction
  | LogoutSessionErrorAction
