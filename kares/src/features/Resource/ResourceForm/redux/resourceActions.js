import { db } from '../../../../shared/services/firebaseConfig'

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}


export const addCounty = (county) => async (dispatch) => {
    const countyCollection = db.collection('resources')

    countyCollection.doc(county).set()

    dispatch(closeCountyForm())
}


export const setCounties = () => async (dispatch) => {
    let countyArray = []

}


export const resourceFormSubmit = (formData) => async (dispatch) => {
    const resourcesCollection = db.collection('resources')

    formData.phone = formatPhoneNumber(formData.phone)

    await resourcesCollection.doc(formData.name).set(formData)

    dispatch(closeResourceForm())
}






export const openResourceForm = () => ({
    type: 'OPEN_RESOURCE_FORM',
    payload: true
})

export const closeResourceForm = () => ({
    type: 'CLOSE_RESOURCE_FORM',
    payload: false
})

export const openCountyForm = () => ({
    type: 'OPEN_COUNTY_FORM',
    payload: true
})

export const closeCountyForm = () => ({
    type: 'CLOSE_COUNTY_FORM',
    payload: false
})

