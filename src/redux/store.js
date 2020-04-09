
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
   userReducer, 
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))