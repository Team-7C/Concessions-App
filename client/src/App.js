import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home.js";
import './components/Home.css';
import Sign_In from "./components/Sign_In.js";
import New_User from "./components/New_User.js";
import './views/Home/Home.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/home_food.jpg';
import './App.css'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPage: 'home',
        username: '',
        password: '',
        phone: '',
        email: ''
      };
        
        this.changePage = this.changePage.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.createUser = this.createUser.bind(this);
        
    }
    
    //if username and password are blank, make signin/up button = 'sign in'.  if user is logged in make the button say 'sign out'
    //on login page, add a button to create new account with a label above it saying something like 'If you don't already have an account create one!'.  Make this button open a sign up page where you can add your information.  do like username, password (2x for clarification), email, and phone for now.
    //make it all look super pretty
    menuItems(){
        return (
            <Navigation alt="Navigation Bar" className = "nav_bar">
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'home'})}}>Home</a>

                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>Menu</a>
                <a href="/" alt="cart" className = "cart" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'cart'})}}>
                <div>
                <img src={ require('../src/assets/shopping_cart.png')} alt="cart logo" className = "cart_logo"/>
                Cart 
                </div>
                </a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'checkout'})}}>Checkout</a>
                { this.state.username === '' ? (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'sign'})}}>Sign In</a>
                ) : (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.changeUser('', ''); this.changePage('home')}}>Sign Out</a>   
                )}

            </Navigation>
        )
    }
    
    changePage(new_val){
        this.setState({selectedPage: new_val});   }
    changeUser(new_password, new_username){
        this.setState({username: new_username, password: new_password});
        //should also retrieve phone and email from user
    }
    createUser(new_user, new_password, new_phone, new_email){
        this.setState({username: new_user, password: new_password, phone: new_phone, email: new_email});
        //should also save user to database
    }

    render() {
        return (

        <div className="demo-big-content">
          <Layout fixedHeader>
              <Header className = "header-color" title={"Team 7C Concession App"} scroll>
                    {this.menuItems()}

              </Header>
              
              {/* <Drawer title="Navigation Bar">
                    {this.menuItems()}
              </Drawer> */}

              <Content>
              <img 
                 src={ require('../src/assets/home_food.jpg') } 
                 alt="food background"
                 className = "background-transparent" 
                />
                   {{
                      ['home']: <Home/>,
                      ['menu']: null,
                      ['venders']: null,
                      ['sign']: <Sign_In changePage={this.changePage} changeUser={this.changeUser}/>,
                      ['new_user']: <New_User changePage={this.changePage} changeUser={this.changeUser} createUser={this.createUser}/>,
                      ['cart']: null,
                      ['checkout']: null,
                     }[this.state.selectedPage]}
                    
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
