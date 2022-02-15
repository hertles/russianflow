import InputRiver from './InputRiver'
import {connect} from "react-redux";
import {MainActionCreator} from "../../Redux/MainReducer";

let mapStateToProps = state => ({
        userID: state.User.currentUserId,
        comments: state.Main.comments,
        value: state.Main.newCommentText,
})
let mapDispatchToProps = dispatch => ({
    Change: (inputText)=>{
        dispatch({type:'CHANGE_COMMENT_TEXT_AREA',new_comment_text:inputText})
    },
    Click: (inputText,riverid,userid)=>{
        let date=new Date;
        dispatch(MainActionCreator(riverid,userid,inputText,date))
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    /*let newDispatchProps={...dispatchProps}
    newDispatchProps.riverID=ownProps.riverid
    newDispatchProps.userID=ownProps.userid
    function bind(func, context){
        return function(){
            return func.apply(context,arguments)
        }
    }
    newDispatchProps.Click=bind(newDispatchProps.Click,newDispatchProps)*/
    return Object.assign({},stateProps,dispatchProps,ownProps)
}
let InputRiverCommentContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(InputRiver)
export default InputRiverCommentContainer
