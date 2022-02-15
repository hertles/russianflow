import './index.css';
import reportWebVitals from './reportWebVitals';
import './ymaps.css'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/reduxStore'

import App from './App'
import Provider from "react-redux/lib/components/Provider";

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
