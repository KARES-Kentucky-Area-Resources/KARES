import { auth, db } from '../../../shared/services/firebaseConfig'



export const userSignIn = (email, password) => async (dispatch) => {
    dispatch(userSignInBegin())
    try {
        const response = await auth.signInWithEmailAndPassword(email, password)
        const fbToken = await response.user.getIdToken()
        const userId = response.user.uid
        dispatch(userSignInSuccess({ fbToken, userId }))
    }
    catch (e) {
        console.log(e)
        if (e.code.includes('auth/user-not-found')) {
            await auth.createUserWithEmailAndPassword(email, password)
            const response = await auth.signInWithEmailAndPassword(email, password)
            const fbToken = await response.user.getIdToken()
            const userId = response.user.uid
            dispatch(userSignInSuccess({ fbToken, userId }))
            return
        }
        dispatch(userSignInFailed(e.message))
    }
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