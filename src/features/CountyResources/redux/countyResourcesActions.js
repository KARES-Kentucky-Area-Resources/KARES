import { db } from '../../../shared/services/firebaseConfig'

export const getAllResouces = (county) => async (dispatch) => {
    dispatch(startLoadingCountyResources())

    try {
        const countyInfoCollection = db.collection('counties').doc(county)
        const resourceCollection = db.collection('resources')
        let countyInfo = {}
        let allResources = []

        await countyInfoCollection.get()
            .then((res) => {
                let resData = res.data()

                if (resData === undefined) {
                    throw new Error('County does not exist in the KARES directory.')
                } else {
                    countyInfo = {
                        county: resData.name,
                        design: {
                            primaryColor: resData.primaryColor,
                            secondaryColor: resData.secondaryColor,
                            labelColor: resData.labelColor
                        }
                    }
                }
            })

        await resourceCollection.get()
            .then((res) => {
                res.forEach((doc) => {
                    if (doc.data().county.toLowerCase() === county) {
                        allResources.push(doc.data())
                    }
                })
                dispatch(loadCountyResources(countyInfo, allResources))
            })

    } catch (error) {
        if (error.message === 'County does not exist in the KARES directory.') {
            dispatch(loadingCountyResourcesError(error.message))
        } else {
            dispatch(loadingCountyResourcesError(error))
        }
        
    }
}



const loadCountyResources = (info, resources) => ({
    type: 'LOAD_COUNTY_RESOURCES',
    payload: {
        county: info.county,
        design: info.design,
        allResources: resources
    }
})

const startLoadingCountyResources = () => ({
    type: 'START_LOADING_COUNTY_RESOURCES'
})

const endLoadingCountyResources = () => ({
    type: 'END_LOADING_COUNTY_RESOURCES'
})

const loadingCountyResourcesError = (error) => ({
    type: 'LOADING_COUNTY_RESOURCES_ERROR',
    payload: error
})

