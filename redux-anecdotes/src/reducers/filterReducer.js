const filterReducer = (state = '', action) => {
    switch(action.type){
        case 'APPLY_FILTER':
            return action.filter
        default:
            return state
    }
}

export const setFilter = filter => {
    return {
        type: 'APPLY_FILTER',
        filter
    }
}

export default filterReducer