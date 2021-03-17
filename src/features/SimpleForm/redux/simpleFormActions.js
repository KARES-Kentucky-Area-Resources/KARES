import { db } from '../../../shared/services/firebaseConfig'
import { store } from '../../../App'
import { push } from 'react-router-redux'
import { validatePhoneNumber, validateEmail } from '../../../shared/helperFunctions'


export const simpleFormSubmit = (formData) => async (dispatch) => {
    const userCollection = db.collection('users')

    formData.phone = validatePhoneNumber(formData.phone)
    formData.email = validateEmail(formData.email)

    dispatch(startFormSubmission())

    if (formData.email === null) {
        dispatch(setFormError('Please enter a valid email address.'))
    } else if (formData.phone === null) {
        dispatch(setFormError('Please enter a valid Phone Number (No +1 or "-" is needed.)'))
    } else if (formData.county === '') {
        dispatch(setFormError('Please enter a county'))
    } else {
        await userCollection.doc(formData.email).set(formData)

        store.dispatch(push(`/resources/${formData.county}`))

        dispatch(closeSimpleForm())
    }
}






export const openSimpleForm = () => ({
    type: 'OPEN_FORM',
    payload: true
})

export const closeSimpleForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})

const setFormError = (error) => ({
    type: 'SET_FORM_ERROR',
    payload: error
})

const startFormSubmission = () => ({
    type: 'START_FORM_SUBMISSION'
})