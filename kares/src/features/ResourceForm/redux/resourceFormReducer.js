const INITIAL_STATE = {
    isResourceFormOpen: false
}

const resourceFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload
            }
        }
        case "CLOSE_FORM": {
            return {
                ...state,
                isResourceFormOpen: action.payload
            }
        }
        default: return state
    }
}

export default resourceFormReducer