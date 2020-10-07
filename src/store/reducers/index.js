import { combineReducers } from 'redux'
import stopReducer from './stopsReducers'

export default combineReducers({
    stops: stopReducer
})