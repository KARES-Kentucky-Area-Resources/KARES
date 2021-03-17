const INITIAL_STATE = {
    currentCounty: '',
    design: {},
    allResources: [],
    form: {
        isOpen: false,
        currentResource: null
    },
    meta: {
        loading: false,
        isLoaded: false,
        error: null
    }
}

const countyResourcesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // RESOURCE LOADING ACTIONS
        case 'LOAD_COUNTY_RESOURCES': {
            return {
                ...state,
                currentCounty: action.payload.county,
                design: action.payload.design,
                allResources: action.payload.allResources,
                meta: {
                    loading: false,
                    isLoaded: true
                }
            }
        }
        case 'START_LOADING_COUNTY_RESOURCES': {
            return {
                ...state,
                meta: {
                    loading: true,
                    isLoaded: false
                }
            }
        }
        case 'END_LOADING_COUNTY_RESOURCES': {
            return {
                ...state,
                meta: {
                    loading: false,
                    isLoaded: true
                }
            }
        }
        case 'LOADING_COUNTY_RESOURCES_ERROR': {
            return {
                ...state,
                meta: {
                    loading: false,
                    error: action.payload
                }
            }
        }
        // FORM ACTIONS
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