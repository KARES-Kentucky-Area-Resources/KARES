import { db } from '../../../shared/services/firebaseConfig'

export const openResourceForm = () => ({
    type: 'OPEN_FORM',
    payload: true
})

export const closeResourceForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})


export const resourceFormSubmit = (formData) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    await resourcesCollection.doc(formData.county).collection(formData.tag).doc(formData.name).set(formData)

    dispatch(closeResourceForm())

}