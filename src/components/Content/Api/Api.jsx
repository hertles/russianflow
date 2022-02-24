import React, {Component} from 'react';
import * as axios from "axios";

class Api extends Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data => {
            this.props.SetUsers(data.data.items);
        })

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Api;