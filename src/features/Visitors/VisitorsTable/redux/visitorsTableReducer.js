const INITIAL_STATE = {
    isLoading: true,
    allVisitors: [],
    temp: {
        tempVisitors: []
    }
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
                allVisitors: action.payload
            }
        }
        case 'SET_TEMP_VISITORS': {
            return {
                ...state,
                temp: {
                    tempVisitors: action.payload
                }
            }
        }
        default: return state
    }
}

export default visitorsTableReducer