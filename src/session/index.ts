//this file just makes it so we have one place we can import from
//in other parts of the project we won't import from ./store or ./action-creators directly

//we get the store variable from ./store
export * from './store'
//go into action creators and export all the named exports as actionCreators
//we may only have one to start, but there could be more if the app grows
export * as actionCreators from './action-creators'
export * from './reducers'
