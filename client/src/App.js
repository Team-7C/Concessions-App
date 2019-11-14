import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home.js";
import Sign_In from "./components/Sign_In.js";
import './views/Home/Home.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/home_food.jpg';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPage: 'home',
        username: '',
        password: ''
      };
        
        this.changeState = this.changeState.bind(this);
        
    }
    
    //if username and password are blank, make signin/up button = 'sign in'.  if user is logged in make the button say 'sign out'
    //on login page, add a button to create new account with a label above it saying something like 'If you don't already have an account create one!'.  Make this button open a sign up page where you can add your information.  do like username, password (2x for clarification), email, and phone for now.
    //make it all look super pretty
    menuItems(){
        return (
            <Navigation>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'home'})}}>Home</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'venders'})}}>Venders</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>Menu</a>
                { this.state.username === '' ? (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'sign'})}}>Sign In</a>
                ) : (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.changeState('home', '', '')}}>Sign Out</a>   
                )}
            </Navigation>
        )
    }
    
    changeState(new_val, new_password, new_username){
        this.setState({selectedPage: new_val, username: new_username, password: new_password});
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
                      ['sign']: <Sign_In changeState={this.changeState}/>,
                     }[this.state.selectedPage]}
                    
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
