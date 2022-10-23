import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import MainReducer from './MainReducer'
import RentReducer from "./RentReducer";
import UserReducer from './UserReducer'
import UsersListReducer from "./UsersListReducer";
import ProfileReducer from "./ProfileReducer";
import AuthReducer from "./AuthReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";
import RiverReducer from "./RiverReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    Main: MainReducer,
    River: RiverReducer,
    Rent: RentReducer,
    User: UserReducer,
    UsersList: UsersListReducer,
    Profile: ProfileReducer,
    Auth: AuthReducer,
    App: AppReducer,
    form: formReducer
})
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store