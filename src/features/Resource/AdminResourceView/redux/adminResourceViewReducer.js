const INITIAL_STATE = {
    formInfo: null,
    isLoading: false,
    isOpen: false
}

const adminResourceViewReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'START_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'END_LOADING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'OPEN_FORM': {
            return {
                ...state,
                isOpen: true,
                formInfo: action.payload
            }
        }
        case 'CLOSE_FORM': {
            return {
                ...state,
                isOpen: action.payload
            }
        }
        default: return state
    }
}

export default adminResourceViewReducer