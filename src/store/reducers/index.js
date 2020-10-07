import { combineReducers } from 'redux'
import stopReducer from './StopsReducers'
import childReducer from './ChildrenReducers'
import schoolReducer from './SchoolsReducers'

export default combineReducers({
    stops: stopReducer,
    childrens : childReducer,
    schools: schoolReducer
})