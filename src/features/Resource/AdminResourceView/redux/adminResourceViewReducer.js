const INITIAL_STATE = {
    formInfo: null,
    isOpen: false,
    resourceViewError: null
}

const adminResourceViewReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'OPEN_FORM': {
            return {
                ...state,
                isOpen: true,
                formInfo: action.payload,
                resourceViewError: null
            }
        }
        case 'CLOSE_FORM': {
            return {
                ...state,
                isOpen: action.payload,
                resourceViewError: null
            }
        }
        case 'SET_FORM_ERROR': {
            return {
                ...state,
                resourceViewError: action.payload
            }
        }
        default: return state
    }
}

export default adminResourceViewReducer