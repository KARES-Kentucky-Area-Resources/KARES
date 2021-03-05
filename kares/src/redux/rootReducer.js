import { combineReducers } from 'redux'

import simpleFormReducer from '../features/SimpleForm/redux/simpleFormReducer'


const reducers = combineReducers({
    simpleForm: simpleFormReducer
})

export default reducers