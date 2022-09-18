import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import React from 'react'
import {compose} from "redux";
class EditProfileContainer extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <EditProfile {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({

})
let mapDispatchToProps = {

}
export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(EditProfileContainer)