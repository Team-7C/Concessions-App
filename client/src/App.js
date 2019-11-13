import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/home_food.jpg';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPage: 'vender'
      };
    }

    render() {
        return (
        <div className="demo-big-content">
          <Layout>
              <Header className = "header-color" title="Team 7C Concession App" scroll>
                  <Navigation>
                      <a href="/">Venders</a>
                      <a href="/">Menu</a>
                      <a href="/">Sign Up/Sign In</a>
                  </Navigation>
              </Header>
              <Drawer title="Navigation Bar">
                  <Navigation>
                      <a href="/">Venders</a>
                      <a href="/">Menu</a>
                      <a href="/">Sign Up/Sign In</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content">
                    <img src={ require('./assets/home_food.jpg') } />
                  </div>
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
