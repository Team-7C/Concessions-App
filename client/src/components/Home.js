import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './Home.css'
import {Layout, Header, Navigation, Drawer, Content, Grid, Cell} from 'react-mdl';

class App extends React.Component {

    render() {
        return (
              <div className="page-content">
                <img 
                 src={ require('../assets/home_food.jpg') } 
                 alt="food background"
                 className = "background-transparent" 
                />
                <div>
                  <img
                    src={ require('../assets/Concession_Stand.jpg')}
                    alt="concession"
                    className = "logo"
                  />
                </div>

                <div className = "banner-text">
                  <h1>
                    Team 7C Concession App. 
                  </h1>
                  <hr/>
                  <p>
                    It's like Grubhub, but not.
                  </p>
                </div>

                <div>
                  
                </div>
              </div>
              
        );
    }
}

export default App;
