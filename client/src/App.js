import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./components/Home/Home.js";
import Menu from "./components/Menu/Menu.js";
import Sign_In from "./components/SignIn/SignIn.js";
import New_User from "./components/SignUp/SignUp.js";
import Cart from "./components/Cart/Cart.js";
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
        email: '',
        cart: []
      };
        
        this.changePage = this.changePage.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.addToCart = this.addToCart.bind(this);
        
    }

  menuItems(){
        return (
            <Navigation alt="Navigation Bar" className = "nav_bar">
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'home'})}}>Home</a>

                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'menu'})}}>Menu</a>
                <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'cart'})}}>
                <img src={ require('../src/assets/shopping_cart.png')} alt="cart logo" className = "cart_logo"/>
                Cart 
                </a>
                { this.state.username === '' ? (
                    <a href="/" onClick={(a) => {a.preventDefault(); this.setState({selectedPage: 'sign'})}}>Sign In</a>
                ) : (
                <a href="/" onClick={(a) => {a.preventDefault(); this.changeUser('', ''); this.changePage('home')}}>Hello {this.state.username}, Sign Out</a>   
                )}

            </Navigation>
        )
    }

    addToCart(item){
        this.state.cart.push(item);
    }
    
    changePage(new_val){
        this.setState({selectedPage: new_val});   
    }
    changeUser(new_username, new_password){
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
              <Header className = "header-color" title={"Team 7C Concession App"}>
                    {this.menuItems()}

              </Header>
              
              {/* <Drawer title="Navigation Bar">
                    {this.menuItems()}
              </Drawer> */}

              <Content>
                    { this.state.selectedPage !== 'menu' ? (
                        <img src={ require('../src/assets/home_food.jpg') } alt="food background" className = "background-transparent"/>
                    ):(null)}

                    {
                        {
                            ['home']: <Home/>,
                            ['menu']: <Menu  itemData={this.props.itemData} addToCart={this.addToCart}/>,
                            ['sign']: <Sign_In changePage={this.changePage} changeUser={this.changeUser}/>,
                            ['new_user']: <New_User changePage={this.changePage} changeUser={this.changeUser} createUser={this.createUser}/>,
                            ['cart']: <Cart cart={this.state.cart}/>,
                        } [this.state.selectedPage]
                    }
                    
              </Content>
          </Layout>
      </div>
        );
    }
}

export default App;
