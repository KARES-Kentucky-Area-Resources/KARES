const INITIAL_STATE = {
    isSimpleFormOpen: false,
    simpleFormError: null,
    isSubmitting: false
}

const simpleFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_FORM": {
            return {
                ...state,
                isSimpleFormOpen: action.payload,
                isSubmitting: false
            }
        }
        case "CLOSE_FORM": {
            return {
                ...state,
                isSimpleFormOpen: action.payload,
                isSubmitting: false
            }
        }
        case "SET_FORM_ERROR": {
            return {
                ...state,
                simpleFormError: action.payload,
                isSubmitting: false
            }
        }
        case 'START_FORM_SUBMISSION': {
            return {
                ...state,
                isSubmitting: true
            }
        }
        default: return state
    }
}

export default simpleFormReducer