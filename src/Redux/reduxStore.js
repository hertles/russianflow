import { combineReducers, createStore } from "redux";
import MainReducer from './MainReducer'
import RentReducer from "./RentReducer";
import UserReducer from './UserReducer'
import ApiReducer from "./ApiReducer";


let reducers = combineReducers({
    Main: MainReducer,
    Rent: RentReducer,
    User: UserReducer,
    Api: ApiReducer
})

let store = createStore(reducers)
export default store