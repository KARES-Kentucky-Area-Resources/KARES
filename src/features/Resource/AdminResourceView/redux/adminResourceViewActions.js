import { db } from '../../../../shared/services/firebaseConfig'
import { loadAllResources } from '../../ResourceTable/redux/resourceTableActions'


export const updateResourceInfo = (newFormData) => async (dispatch) => {
    
    const resourcesCollection = db.collection('resources')

    await resourcesCollection.doc(newFormData.name).update(newFormData)

    dispatch(closeAdminResourceForm())
    dispatch(loadAllResources())
}

export const deleteResource = (resourceName) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    await resourcesCollection.doc(resourceName).delete()
    .then(() => console.log('Doc successfully deleted!'))
    .catch((error) => console.log(error))

    dispatch(closeAdminResourceForm())
    dispatch(loadAllResources())
}




export const openAdminResourceForm = (formData) => ({
    type: 'OPEN_FORM',
    payload: formData
})

export const closeAdminResourceForm = () => ({
    type: 'CLOSE_FORM',
    payload: false
})