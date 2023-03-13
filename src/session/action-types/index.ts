//as our application grows and we add reducers we can include the actions types in this file
export enum ActionType {
  UPDATE_SESSION = 'update-session',
  UPDATE_SESSION_SUCCESS = 'update-session-success',
  UPDATE_SESSION_ERROR = 'update-session-error',
  LOGOUT_SESSION = 'logout-session',
  LOGOUT_SESSION_SUCCESS = 'logout-session-success',
  LOGOUT_SESSION_ERROR = 'logout-session-error'
}
