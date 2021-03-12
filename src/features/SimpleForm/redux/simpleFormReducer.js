const INITIAL_STATE = {
    isSimpleFormOpen: false,
    simpleFormError: null
}

const simpleFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_FORM": {
            return {
                ...state,
                isSimpleFormOpen: action.payload
            }
        }
        case "CLOSE_FORM": {
            return {
                ...state,
                isSimpleFormOpen: action.payload
            }
        }
        case "SET_FORM_ERROR": {
            return {
                ...state,
                simpleFormError: action.payload
            }
        }
        default: return state
    }
}

export default simpleFormReducer