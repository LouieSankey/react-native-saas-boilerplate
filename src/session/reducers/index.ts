import { combineReducers } from 'redux'
import repositoriesReducer from './repositories-reducer'

const reducers = combineReducers({
  repositories: repositoriesReducer //repositoriesReducer is our custom function
})

export default reducers
//take the function reducers and give us back the type of whatever that function returns
export type RootState = ReturnType<typeof reducers>
