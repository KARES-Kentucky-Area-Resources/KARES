import { auth } from '../../../../shared/services/firebaseConfig'




export const userSignIn = (email, password) => async (dispatch) => {
    dispatch(userSignInBegin())
    try {
        const response = await auth.signInWithEmailAndPassword(email, password)
        const fbToken = await response.user.getIdToken()
        const userId = response.user.uid
        dispatch(userSignInSuccess({ fbToken, userId }))
    }
    catch (e) {
        // if (e.code.includes('auth/user-not-found')) {
        //     await auth.createUserWithEmailAndPassword(email, password)
        //     const response = await auth.signInWithEmailAndPassword(email, password)
        //     const fbToken = await response.user.getIdToken()
        //     const userId = response.user.uid
        //     dispatch(userSignInSuccess({ fbToken, userId }))
        //     return
        // }
        dispatch(userSignInFailed(e.message))
    }
}

export const logOut = () => dispatch => {
    dispatch(userLogOut())
}


const userSignInBegin = () => ({
    type: 'USER_LOGGED_IN_BEGIN'
})

const userSignInFailed = (message) => ({
    type: 'USER_LOGGED_IN_FAIL',
    payload: message
})

const userSignInSuccess = (data) => ({
    type: 'USER_LOGGED_IN_SUCCESS',
    payload: data
})

const userLogOut = () => ({
    type: 'USER_LOG_OUT',
})