import { combineReducers } from 'redux'

import simpleFormReducer from '../features/SimpleForm/redux/simpleFormReducer'
import authorizationReducer from '../features/Authorization/redux/authorizationReducer'
import resourceFormReducer from '../features/ResourceForm/redux/resourceFormReducer'


const reducers = combineReducers({
    simpleForm: simpleFormReducer,
    authorization: authorizationReducer,
    resourceForm: resourceFormReducer,
})

export default reducers