import { combineReducers } from 'redux'

import simpleFormReducer from '../features/SimpleForm/redux/simpleFormReducer'
import authorizationReducer from '../features/Admin/Authorization/redux/authorizationReducer'
import resourceFormReducer from '../features/Admin/Resource/ResourceForm/redux/resourceReducer'
import visitorsTableReducer from '../features/Admin/Visitors/VisitorsTable/redux/visitorsTableReducer'
import resourceTableReducer from '../features/Admin/Resource/ResourceTable/redux/resourceTableReducer'
import adminResourceViewReducer from '../features/Admin/Resource/AdminResourceView/redux/adminResourceViewReducer'
import countyResourcesReducer from '../features/CountyResources/redux/countyResourcesReducer'


const reducers = combineReducers({
    simpleForm: simpleFormReducer,
    authorization: authorizationReducer,
    resourceForm: resourceFormReducer,
    visitorsTable: visitorsTableReducer,
    resourceTable: resourceTableReducer,
    adminResourceView: adminResourceViewReducer,
    countyResources: countyResourcesReducer
})

export default reducers