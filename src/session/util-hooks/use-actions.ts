import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '..'

//custom hook that lets you more easily use all of your actions
export const useActions = () => {
  const dispatch = useDispatch()
  //for now this just has one action creator, but its an object that could have many.
  //now all the values from our action creates will be automatically provided to dispatch
  //so we get back something that looks like { searchRepositories: dispatch(searchRepositories)}
  return bindActionCreators(actionCreators, dispatch)
}
