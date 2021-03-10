import { db } from '../../../shared/services/firebaseConfig'


export const loadAllVisitors = (name = '', county = 'All') => async (dispatch) => {
    const visitors = db.collection('users')
    let returnArray = []
    let filteredArray = []

    dispatch(beginFetchingVisitors())

    try {
        await visitors.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                returnArray.push(doc.data())
            })
        })

        filteredArray = returnArray.filter(vis => vis)

        if (county !== 'All') {
            filteredArray = filteredArray.filter(vis => vis.county === county)
        }
        if (name !== '') {
            filteredArray = filteredArray.filter(vis => vis.name.includes(name))
        }

        
        if (name === '' & county === 'All') {
            dispatch(setVisitors(returnArray))
        } else {
            dispatch(setVisitors(filteredArray))
        }
       
    }
    catch (e) {

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

const endFetchingVisitors = () => ({
    type: 'END_LOADING'
})
