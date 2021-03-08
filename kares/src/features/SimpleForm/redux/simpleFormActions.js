import { db } from '../../../shared/services/firebaseConfig'
import { store } from '../../../App'
import { push } from 'react-router-redux'


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

    await userCollection.doc(formData.email).set(formData)

    store.dispatch(push(`/resources/${formData.county}`))

    dispatch(closeSimpleForm())
    
}