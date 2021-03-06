import { db } from '../../../shared/services/firebaseConfig'


export const openSimpleForm = () => ({
    type: 'OPEN_FORM',
    payload: true
})

export const closeSimpleForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})

export const simpleFormSubmit = (formData) => dispatch => {

    const userCollection = db.collection('users')

    userCollection.doc(formData.email).set(formData)
}