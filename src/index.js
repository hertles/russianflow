import './index.css';
import reportWebVitals from './reportWebVitals';
import './ymaps.css'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/reduxStore'
import App from './App'
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import Helmet from "react-helmet"
ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <Helmet
                    title="RussianFlow"
                />
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
