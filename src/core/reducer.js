import { combineReducers} from 'redux'

import {feed, stories,dm, user } from './reducers'

export default combineReducers({
    feed,
    stories,
    dm,
    user
})