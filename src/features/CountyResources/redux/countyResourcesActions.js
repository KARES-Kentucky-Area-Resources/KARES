import { db } from '../../../shared/services/firebaseConfig'

export const getAllResouces = (county) => async (dispatch) => {
    const countyInfoCollection = db.collection('counties').doc(county)
    const resourceCollection = db.collection('resources')
    let countyInfo = {}
    let allResources = []

    await countyInfoCollection.get()
    .then((res) => {
        let resData = res.data()
        countyInfo = {
            county: resData.name,
            design: {
                primaryColor: resData.primaryColor,
                secondaryColor: resData.secondaryColor,
                labelColor: resData.labelColor
            }
        }
    })

    await resourceCollection.get()
    .then((res) => {
        res.forEach((doc) => {
            if (doc.data().county.toLowerCase() === county){
                allResources.push(doc.data())
            }
        })
    })

    dispatch(setCountyResourceInfo(countyInfo, allResources))
}



const setCountyResourceInfo = (info, resources) => ({
    type: 'LOAD_COUNTY_RESOURCES',
    payload: {
        county: info.county,
        design: info.design,
        allResources: resources
    }
})