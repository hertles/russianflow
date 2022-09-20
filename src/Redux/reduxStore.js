import {applyMiddleware, combineReducers, createStore} from "redux";
import MainReducer from './MainReducer'
import RentReducer from "./RentReducer";
import UserReducer from './UserReducer'
import ApiReducer from "./ApiReducer";
import ApiUserReducer from "./ApiUserReducer";
import ApiAuthReducer from "./ApiAuthReducer";
import ApiFollowReducer from "./ApiFollowReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    Main: MainReducer,
    Rent: RentReducer,
    User: UserReducer,
    Api: ApiReducer,
    ApiUser: ApiUserReducer,
    ApiAuth: ApiAuthReducer,
    ApiFollow: ApiFollowReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunk))
export default store