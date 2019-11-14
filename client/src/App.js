import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home.js";
import './views/Home/Home.css';
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
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'signIn'})}}>Sign Up/Sign In</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>Menu</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'checkout'})}}>Checkout</a>
            </Navigation>
        )
    }

    render() {
        return (

        <div className="demo-big-content">
          <Layout fixedHeader>
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
                      ['checkout']: null,
                     }[this.state.selectedPage]}
                    
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
