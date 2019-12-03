import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home/Home.js";
import Menu from "./components/Menu/Menu.js";
import Sign_In from "./components/SignIn/SignIn.js";
import New_User from "./components/SignUp/SignUp.js";
import Reset from "./components/Reset/Rest"
import Cart from "./components/Cart/Cart.js";
import AdminDisplay from "./components/Admin/AdminDisplay.js";
import AdminVendor from "./components/Admin/AdminVendor.js";
import AdminCustomer from "./components/Admin/AdminCustomer.js";
import Admin from "./components/Admin/Admin.js";

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './assets/home_food.jpg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer} from 'react-mdl';


var request = require('request'),
    count = 10;

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPage: 'home',
        username: '',
        password: '',
        name: '',
        phone: '',
        email: '',
        cart: []
      };
        
        this.changePage = this.changePage.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

  menuItems(){


        return (
            <Navigation alt="Navigation Bar" className = "nav_bar">
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'home'})}}>
                    <img src={ require('../src/assets/home.png')} alt="home logo" className = "cart_logo"/>
                    Home
                </a>
                              
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>
                    <img src={ require('../src/assets/menu.png')} alt="menu logo" className = "cart_logo"/>
                        Menu
                </a>

                { this.state.cart.length > 0 ? 
                (<a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'cart'})}}>
                    <img src={ require('../src/assets/shopping_cart.png')} alt="cart logo" className = "cart_logo"/>
                    Cart({this.state.cart.length}) </a>) : 
                    (<a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'cart'})}}>
                    <img src={ require('../src/assets/shopping_cart.png')} alt="cart logo" className = "cart_logo"/>
                    Cart 
                </a>)}
  
                { this.state.username === '' ? (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'sign'})}}>
                        <img src={ require('../src/assets/signin.png')} alt="signin logo" className = "cart_logo"/>
                        Sign In
                    </a>
                ) : (
                <a href="/" onClick={(a) => {a.preventDefault(); this.changeUser('', ''); this.changePage('sign')}}>
                    <img src={ require('../src/assets/signin.png')} alt="signin logo" className = "cart_logo"/>
                    Hello, {this.state.username} | Sign Out</a>   
                )}
				<a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'admin'})}}>
                    <img src={ require('../src/assets/key.png')} alt="key logo" className = "cart_logo"/>
                    Admin</a>

            </Navigation>
        )
    }

    addToCart(item){
        this.state.cart.push(item);
        this.changePage('menu');
    }

    removeFromCart(item) {
        for (var i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].name === item) {
                this.state.cart.splice(i, 1);
                break;
            }
        }
        this.changePage('cart');
    }
    
    changePage(new_val){
        this.setState({selectedPage: new_val});   
    }
    changeUser(new_username, new_password){
        this.setState({username: new_username, password: new_password});
        //should also retrieve phone and email from user
    }
    createUser(user, pass, name, phone, email){
        this.setState({username: user, password: pass, name: name, phone: phone, email: email});
        request.post('https://chomperapp.herokuapp.com/api/customers', {
            json: {
                uid: count + 1,
                credentials: {
                    username: user,
                    password: pass,
                    salt: "w/e"
                },
                name: name,
                phone: phone,
                email: email
            }
        })
        count = count + 1;
        //should also save user to database
    }
    resetPassword(email, phone, new_password) {
        //need to pull the user info from DB based on email and phone and reset password
        //
        this.setState({
            password: new_password
        })
    }

    render() {

        return (
        <div className="demo-big-content">
          <Layout fixedHeader>
              <Header title={"Chomper"} className = "mdl-color--orange-800">
                    {this.menuItems()}
              </Header>
              <Content>
                   {{
                      ['home']: <Home/>,
					  ['admin']: <Admin changePage={this.changePage}/>,
                      ['admin_display']: <AdminDisplay changePage={this.changePage}/>,
                      ['admin_vendor']: <AdminVendor changePage={this.changePage}/>,
                      ['admin_cust']: <AdminCustomer changePage={this.changePage}/>,
                      ['menu']: <Menu itemData={this.props.itemData} addToCart={this.addToCart}/>,
                      ['sign']: <Sign_In changePage={this.changePage} changeUser={this.changeUser}/>,
                      ['new_user']: <New_User changePage={this.changePage} changeUser={this.changeUser} createUser={this.createUser}/>,
                      ['reset']: <Reset changePage={this.changePage} changeUser={this.changeUser} resetPassword={this.resetPassword}/>,
                      ['cart']: <Cart cart={this.state.cart} removeItem={this.removeFromCart} changePage={this.changePage}/>,
                     }[this.state.selectedPage]}
                    
              </Content>

          </Layout>
      </div>
        );
    }
}

export default App;