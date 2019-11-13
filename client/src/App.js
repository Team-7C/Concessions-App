import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home.js"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/home_food.jpg';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPage: 'home'
      };
    }

    menuItems(){
        return (
            <Navigation>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'home'})}}>Home</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'venders'})}}>Venders</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>Menu</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'sign'})}}>Sign Up/Sign In</a>
            </Navigation>
        )
    }

    render() {
        return (

        <div className="demo-big-content">
          <Layout>
              <Header className = "header-color" title={"Team 7C Concession App - " + this.state.selectedPage} scroll>
                    {this.menuItems()}

              </Header>
              
              <Drawer title="Navigation Bar">
                    {this.menuItems()}
              </Drawer>

              <Content>
                   {{
                      ['home']: <Home/>,
                      ['menu']: null,
                      ['venders']: null,
                      ['sign']: null,
                     }[this.state.selectedPage]}
                    
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
