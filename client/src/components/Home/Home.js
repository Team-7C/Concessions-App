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
            <Grid style = {{textAlign: 'center'}}>
            <Cell col ={12}>
                <div>
                  <img
                    src={ require('../../assets/Concession_Stand.jpg')}
                    alt="concession"
                    style = {{height: '250px'}}
                  />
                </div>
              </Cell>
            </Grid>
            <Grid>
              <Cell col ={12}>
                {/* <div>
                  <img
                    src={ require('../../assets/Concession_Stand.jpg')}
                    alt="concession"
                    className = "logo"
                  />
                </div> */}

                <div className = "banner-text">
                  <h1>
                    Team 7C Concession App. 
                  </h1>
                  <hr/>
                  <p>
                    It's like Grubhub, but not.
                  </p>
                </div>
              </Cell>
            </Grid>

            <Grid>
              <Cell col = {12}>
                <div className = "banner-text">
                  <h1>
                    So how does it work? 
                  </h1>
                  <hr/>
                  <p>
                    Through the power of coding, anything is possible. 
                  </p>
                </div>
              </Cell>
            </Grid>
            <Grid>
             <Cell col = {6} >
               <div className = "banner-text">
                 <h1>
                  Step 1: Open the Menu
                 </h1>
                 <hr/>
                 <p>
                   There are so many options available. Anything from pizza to buritos, we have it all! 
                 </p>
               </div>
             </Cell>
             <Cell col = {6} >
              <div className = "image-border">
                  <img
                    src={ require('../../assets/couple_looking_menu.jpg')}
                    alt="concession"
                    style = {{height: '300px'}}
                  />
              </div>
             </Cell>
            </Grid>  
            <Grid>
             <Cell col = {6} >
             <div className = "image-border">
                  <img
                    src={ require('../../assets/women_selecting_food.jpg')}
                    alt="concession"
                    style = {{height: '300px'}}
                  />
              </div>
             </Cell>
             <Cell col = {6}>
               <div className = "banner-text">
                 <h1>
                  Step 2: Select Your Food
                 </h1>
                 <hr/>
                 <p>
                   Just looking at all the options can make you hungry. Make sure to add your choices to the cart! 
                 </p>
               </div>
             </Cell>
            </Grid>  
            <Grid>
            <Cell col = {6} >
               <div className = "banner-text">
                 <h1>
                  Step 3: Complete Your Order
                 </h1>
                 <hr/>
                 <p>
                   With all that food in your shopping cart, it would be a shame not to order it all. Don't forget to confirm your order so you can get your food right away!
                 </p>
               </div>
             </Cell>
             <Cell col = {6} >
             <div className = "image-border">
                  <img
                    src={ require('../../assets/food_deliver_stadium.jpg')}
                    alt="concession"
                    style = {{height: '300px'}}
                  />
              </div>
             </Cell>
            </Grid>
          </div>        
        );
    }
}

export default App;
