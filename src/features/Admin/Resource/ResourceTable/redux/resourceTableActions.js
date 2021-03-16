import { db } from '../../../../../shared/services/firebaseConfig'

export const loadAllResources = () => async (dispatch) => {
    const resources = db.collection('resources')
    let allResources = []

    dispatch(beginFetchingResources())

    try {
        await resources.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                allResources.push(doc.data())
            })
        })

        dispatch(setResources(allResources))
        dispatch(setTempResources(allResources))
        dispatch(endFetchingResources())
    }
    catch (e) {
        console.log(e)
    }

}


export const applyResourceFilter = (resources, name='', tag='All', county='All') => async (dispatch) => {
    let filteredResources = resources

    if (name !== '') {
        filteredResources = filteredResources.filter(resource => resource.name.includes(name))
    }

    if (tag !== 'All') {
        filteredResources = filteredResources.filter(resource => resource.tag === tag)
    }

    if (county !== 'All') {
        filteredResources = filteredResources.filter(resource => resource.county === county)
    }

    if (name === '' & tag === 'All' & county === 'All') {
        dispatch(setTempResources(filteredResources))
    } else {
        dispatch(setTempResources(filteredResources))
    }
}









const beginFetchingResources = () => ({
    type: 'START_LOADING'
})

const setResources = (resources) => ({
    type: 'SET_RESOURCES',
    payload: resources
})
const setTempResources = (resources) => ({
    type: 'SET_TEMP_RESOURCES',
    payload: resources
})

const endFetchingResources = () => ({
    type: 'END_LOADING'
})