import { combineReducers, createStore } from "redux";
import MainReducer from './MainReducer'
import RentReducer from "./RentReducer";
import UserReducer from './UserReducer'


let reducers = combineReducers({
    Main: MainReducer,
    Rent: RentReducer,
    User: UserReducer,
    
})

let store = createStore(reducers)
export default store