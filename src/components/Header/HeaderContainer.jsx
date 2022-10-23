import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {login: state.Auth.login, userId: state.Auth.userId, isAuth: state.Auth.isAuth}
}
export default connect(mapStateToProps)(HeaderContainer);