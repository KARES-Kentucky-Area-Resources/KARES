const INITIAL_STATE = {
    isLoading: true,
    visitors: []
}

const visitorsTableReducer = (state = INITIAL_STATE, action) => {
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
                isLoading: false
            }
        }
        case 'SET_VISITORS': {
            return {
                ...state,
                visitors: action.payload
            }
        }
        default: return state
    }
}

export default visitorsTableReducer