const INITIAL_STATE = {
    isSimpleFormOpen: false
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
        default: return state
    }
}

export default simpleFormReducer