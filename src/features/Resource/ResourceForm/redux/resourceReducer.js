const INITIAL_STATE = {
    counties: [],
    isResourceFormOpen: false,
    resourceFormError: null
}

const resourceFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_RESOURCE_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload,
                resourceFormError: null
            }
        }
        case "CLOSE_RESOURCE_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload,
                resourceFormError: null
            }
        }
        case "SET_FORM_ERROR": {
            return {
                ...state,
                resourceFormError: action.payload
            }
        }
        default: return state
    }
}

export default resourceFormReducer