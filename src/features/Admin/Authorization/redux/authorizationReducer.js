const INITIAL_STATE = {
    loggedIn: false,
    user: {},
    meta: {
        loggingIn: false,
        error: ''
    }
}

const authFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN_BEGIN': {
            return {
                ...state,
                loggedIn: false,
                meta: {
                    ...state.meta,
                    loggingIn: true,
                    error: ''
                }
            }
        }
        case 'USER_LOGGED_IN_SUCCESS': {
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
                meta: {
                    ...state.meta,
                    loggingIn: false,
                    error: ''
                }
            }
        }
        case 'USER_LOGGED_IN_FAIL': {
            return {
                ...state,
                loggedIn: false,
                meta: {
                    ...state.meta,
                    loggingIn: false,
                    error: action.payload
                }
            }
        }
        case 'USER_LOG_OUT': {
            return {
                ...state,
                loggedIn: false,
                user: {},
                meta: {
                    error: 'User logged out successfully!'
                }
            }
        }
        default: return state
    }
}

export default authFormReducer