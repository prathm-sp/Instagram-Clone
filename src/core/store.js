import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducer' 

let middleWare = applyMiddleware(thunk, createLogger())
let store = createStore(reducer, middleWare)

export default store