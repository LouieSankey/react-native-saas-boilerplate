//now instead of using useSelector to get our state out of our store, we replace useSelector
//with our own useSelector (useTypedSelector but we keep the name the same)

import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '..'

//this wil return useSelector with our types included from our redux store
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
