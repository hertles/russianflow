let initialState={
    list: [
        {userid: 0, username: 'Забытый турист'},
        {userid: 1, username: 'Вырвавшийся'},
        {userid: 2, username: 'hertles_graft'}
    ],
    isAuthorized: true,
    currentUserId: 1,
    newNameText: '',
    
}
initialState.newNameText=initialState.list.find(user=>user.userid===initialState.currentUserId).username
const UserReducer = (state=initialState,action) =>{
    let StateCopy={...state}
    switch (action.type) {
        case 'CHANGE_NAME_TEXT_AREA':
            StateCopy.newNameText = action.new_name_text
            break;
        case 'CHANGE_NAME_COMPLETED':
            StateCopy.list.forEach(user => {
                if (user.userid === StateCopy.currentUserId) {
                    user.username = action.new_name
                }
            })
        default:
            break;
    }
    return StateCopy;
}
export default UserReducer