import { combineReducers } from 'redux'

import simpleFormReducer from '../features/SimpleForm/redux/simpleFormReducer'
import authorizationReducer from '../features/Authorization/redux/authorizationReducer'
import resourceFormReducer from '../features/Resource/ResourceForm/redux/resourceReducer'
import visitorsTableReducer from '../features/Visitors/VisitorsTable/redux/visitorsTableReducer'
import resourceTableReducer from '../features/Resource/ResourceTable/redux/resourceTableReducer'
import adminResourceViewReducer from '../features/Resource/AdminResourceView/redux/adminResourceViewReducer'


const reducers = combineReducers({
    simpleForm: simpleFormReducer,
    authorization: authorizationReducer,
    resourceForm: resourceFormReducer,
    visitorsTable: visitorsTableReducer,
    resourceTable: resourceTableReducer,
    adminResourceView: adminResourceViewReducer
})

export default reducers