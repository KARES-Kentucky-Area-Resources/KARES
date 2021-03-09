import { combineReducers } from 'redux'

import simpleFormReducer from '../features/SimpleForm/redux/simpleFormReducer'
import authorizationReducer from '../features/Authorization/redux/authorizationReducer'
import resourceFormReducer from '../features/ResourceForm/redux/resourceFormReducer'
import visitorsTableReducer from '../features/VisitorsTable/redux/visitorsTableReducer'


const reducers = combineReducers({
    simpleForm: simpleFormReducer,
    authorization: authorizationReducer,
    resourceForm: resourceFormReducer,
    visitorsTable: visitorsTableReducer,
})

export default reducers