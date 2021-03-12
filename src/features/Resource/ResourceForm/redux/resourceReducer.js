const INITIAL_STATE = {
    isResourceFormOpen: false,
    isCountyFormOpen: false,
    counties: []
}

const resourceFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_RESOURCE_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload
            }
        }
        case "CLOSE_RESOURCE_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload
            }
        }
        case "OPEN_COUNTY_FORM": {
            return {
                ...state,
                isCountyFormOpen: action.payload
            }
        }
        case "CLOSE_COUNTY_FORM": {
            return {
                ...state,
                isCountyFormOpen: action.payload
            }
        }
        case "SET_COUNTIES": {
            return {
                ...state,
                counties: action.payload
            }
        }
        default: return state
    }
}

export default resourceFormReducer