import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import custData from './data/custData.json';
import itemData from './data/itemData.json';
import vendData from './data/vendData.json';
//import tranData from './data/tranData.json';
//The app is now passing the data as a property

ReactDOM.render(
    <App 
        custData={custData}
        itemData={itemData}
        vendData={vendData}
        //tranData={tranData}
    />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
