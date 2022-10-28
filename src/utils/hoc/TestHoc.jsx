import {Provider} from "react-redux";
import store from "../../Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import React from "react";

export let TestHoc = (Component) => {
    return <BrowserRouter>
        <Provider store={store}>{Component}</Provider></BrowserRouter>
}