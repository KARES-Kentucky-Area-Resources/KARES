import { db } from '../../../shared/services/firebaseConfig'


export const loadAllVisitors = () => async (dispatch) => {
    const visitors = db.collection('users')
    const returnArray = []

    dispatch(beginFetchingVisitors())

    try {
        await visitors.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                returnArray.push(doc.data())
            })
        })
        dispatch(setVisitors(returnArray))
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
