const INITIAL_STATE = {
    currentCounty: '',
    design: {},
    allResources: [],
    form: {
        isOpen: false,
        currentResource: null
    }
}

const countyResourcesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOAD_COUNTY_RESOURCES': {
            return {
                ...state,
                currentCounty: action.payload.county,
                design: action.payload.design,
                allResources: action.payload.allResources
            }
        }
        case 'VIEW_COUNTY_RESOURCE': {
            return {
                ...state,
                form: {
                    isOpen: true,
                    currentResource: action.payload
                }
            }
        }
        case 'CLOSE_COUNTY_RESOURCE_FORM': {
            return {
                ...state,
                form: {
                    isOpen: false,
                    currentResource: null
                }
            }
        }
        default: return state
    }
}

export default countyResourcesReducer