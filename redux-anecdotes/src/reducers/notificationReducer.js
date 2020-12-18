
const notificationReducer = (state = { message: '' }, action) => {
    switch (action.type) {
        case 'NOTIFY':
            console.log(action.message)
            return {
                ...state,
                message: action.message
            }
        case 'HIDE':
            return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}

let interval = null
export const setNotification = (message, time) => {
    console.log(message)
    return async dispatch => {
        dispatch({
            type: 'NOTIFY',
            message: message
        })
        clearTimeout(interval)
        interval = setTimeout(() => {
            dispatch({
                type: 'HIDE'
            })
        }, time)
    }
}

export default notificationReducer