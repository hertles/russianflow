let initialState = []
let ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'API_LOAD_USERS': {
            let StateCopy = {...action.list}
            return StateCopy;
        }
        default: {
            return state;
        }
    }
}
export let ApiLoadUsersAC = (list) => {
    return {type: 'API_LOAD_USERS',list: list}
}
export default ApiReducer