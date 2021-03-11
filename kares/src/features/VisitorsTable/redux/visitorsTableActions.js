import { db } from '../../../shared/services/firebaseConfig'


export const loadAllVisitors = (name = '', county = 'All') => async (dispatch) => {
    const visitors = db.collection('users')
    let returnArray = []

    dispatch(beginFetchingVisitors())

    try {
        await visitors.get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    returnArray.push(doc.data())
                })
            })
        
        dispatch(setVisitors(returnArray))
        dispatch(setTempVisitors(returnArray))
        dispatch(endFetchingVisitors())

    }
    catch (e) {
    }
}





export const filterFetchedVisitors = (visitors, name = '', county = 'All') => dispatch => {
    dispatch(beginFetchingVisitors())

    let filteredVisitors = visitors

    if (name !== '') {
        filteredVisitors = visitors.filter(vis => vis.name.includes(name))
    }

    if (county !== 'All') {
        filteredVisitors = visitors.filter(vis => vis.county === county)
    }

    if (name === '' & county === 'All') {
        dispatch(setTempVisitors(filteredVisitors))
    } else {
        dispatch(setTempVisitors(filteredVisitors))
    }

    dispatch(endFetchingVisitors())
}





const beginFetchingVisitors = () => ({
    type: 'START_LOADING'
})

const setVisitors = (visitors) => ({
    type: 'SET_VISITORS',
    payload: visitors
})
const setTempVisitors = (visitors) => ({
    type: 'SET_TEMP_VISITORS',
    payload: visitors
})

const endFetchingVisitors = () => ({
    type: 'END_LOADING'
})
