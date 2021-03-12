import { db } from '../../../../shared/services/firebaseConfig'
import { loadAllResources } from '../../ResourceTable/redux/resourceTableActions'
import { validatePhoneNumber, validateEmail } from '../../../../shared/helperFunctions'


export const resourceFormSubmit = (formData) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    formData.phone = validatePhoneNumber(formData.phone)
    formData.email = validateEmail(formData.email)

    if (formData.county === '') {
        dispatch(setFormError('Please select a County.'))
    } else if (formData.name === '') {
        dispatch(setFormError('Please Enter a Resource Name.'))
    } else if (formData.phone === '' || formData.phone === null) {
        dispatch(setFormError('Please Enter a Valid Phone Number.'))
    } else if (formData.address === '') {
        dispatch(setFormError('Please Enter an address.'))
    } else if (formData.tag === '') {
        dispatch(setFormError('Please select a tag.'))
    } else {
        await resourcesCollection.doc(formData.name).set(formData)

        dispatch(closeResourceForm())
        dispatch(loadAllResources())
    }
}




export const openResourceForm = () => ({
    type: 'OPEN_RESOURCE_FORM',
    payload: true
})

export const closeResourceForm = () => ({
    type: 'CLOSE_RESOURCE_FORM',
    payload: false
})

export const setFormError = (error) => ({
    type: 'SET_FORM_ERROR',
    payload: error
})

