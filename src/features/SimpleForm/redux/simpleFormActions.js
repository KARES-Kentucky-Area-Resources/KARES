import { db } from '../../../shared/services/firebaseConfig'
import { store } from '../../../App'
import { push } from 'react-router-redux'

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}


export const openSimpleForm = () => ({
    type: 'OPEN_FORM',
    payload: true
})

export const closeSimpleForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})

export const simpleFormSubmit = (formData) => async (dispatch) => {
    const userCollection = db.collection('users')

    formData.phone = formatPhoneNumber(formData.phone)

    await userCollection.doc(formData.email).set(formData)

    store.dispatch(push(`/resources/${formData.county}`))

    dispatch(closeSimpleForm())
    
}