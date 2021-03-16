import { db } from '../../../../../shared/services/firebaseConfig'
import { loadAllResources } from '../../ResourceTable/redux/resourceTableActions'
import { validatePhoneNumber } from '../../../../../shared/helperFunctions'


export const updateResourceInfo = (formData) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    formData.phone = validatePhoneNumber(formData.phone)

    console.log(formData.phone)


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
        await resourcesCollection.doc(formData.name).update(formData)

        dispatch(closeAdminResourceForm())
        dispatch(loadAllResources())
    }
}

export const deleteResource = (resourceName) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    await resourcesCollection.doc(resourceName).delete()
    .then(() => {
        console.log('Doc successfully deleted!')
        dispatch(closeAdminResourceForm())
        dispatch(loadAllResources())
    })
    .catch((error) => dispatch(setFormError(error)))
}



export const openAdminResourceForm = (formData) => ({
    type: 'OPEN_FORM',
    payload: formData
})

export const closeAdminResourceForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})

export const setFormError = (error) => ({
    type: 'SET_FORM_ERROR',
    payload: error
})