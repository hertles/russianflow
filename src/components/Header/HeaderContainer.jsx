import * as React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {Auth} from "../../Redux/ApiAuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response=> {
                this.props.Auth(response.data.data.id,response.data.data.login,response.data.data.email)
            }
        )
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}
let mapStateToProps=(state)=>{
    return {login: state.ApiAuth.login, userId: state.ApiAuth.userId, isAuth: state.ApiAuth.isAuth}
}
export default connect(mapStateToProps,{Auth})(HeaderContainer);