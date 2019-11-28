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

                <div className = "body-text"> 
                  <h1>
                    
                  </h1>
                </div>
              </div>
              
        );
    }
}

export default App;
