import AsyncStorage from '@react-native-async-storage/async-storage'
import { Session } from '../../../sharedTypes/types'
import { ActionType } from '../action-types'
import { Action } from '../actions'

interface SessionState {
  loading: boolean
  error: string | null
  data: Session | null
}

const initialState: SessionState = {
  loading: false,
  error: null,
  data: null
}

const loadSessionFromStorage = async (): Promise<SessionState['data']> => {
  try {
    const session = await AsyncStorage.getItem('session')
    if (session) {
      return JSON.parse(session)
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

//SessionState as a return type isn't required, but it will ensure that our return statements
//are always of the correct type
const reducer = (
  state: SessionState = initialState,
  action: Action
): SessionState => {
  //the switch statement will automatically map the correct type for each case by it's name
  switch (action.type) {
    case ActionType.UPDATE_SESSION:
      return { loading: true, error: null, data: null }
    case ActionType.UPDATE_SESSION_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.UPDATE_SESSION_ERROR:
      return { loading: false, error: action.payload, data: null }
    case ActionType.LOGOUT_SESSION:
      return { loading: false, error: null, data: null }
    default:
      return state
  }
}

// Load session from storage before creating the store
loadSessionFromStorage().then((session) => {
  if (session) {
    initialState.data = session
  }
})

export default reducer
