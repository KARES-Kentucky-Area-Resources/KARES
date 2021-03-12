const INITIAL_STATE = {
    allResources: [],
    tempResources: [],
    isLoading: true
}

const resourceTableReducer = (state = INITIAL_STATE, action) => {
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
        case 'SET_RESOURCES': {
            return {
                ...state,
                allResources: action.payload
            }
        }
        case 'SET_TEMP_RESOURCES': {
            return {
                ...state,
                tempResources: action.payload
            }
        }
        default: return state
    }
}

export default resourceTableReducer