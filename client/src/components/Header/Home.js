import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../assets/home_food.jpg';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends React.Component {

    render() {
        return (
                  <div className="page-content">
                    <img src={ require('./assets/home_food.jpg') } />
                    
                  </div>
        );
    }
}

export default App;
