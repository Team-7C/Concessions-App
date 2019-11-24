import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './Home.css'
import {Layout, Header, Navigation, Drawer, Content, Grid, Cell, Footer} from 'react-mdl';

class App extends React.Component {

    render() {
        return (
          <div>
            <div class="mdl-layout__tab-panel is-active" id="fixed-tab-1">

              <div class="page-content">
                
                <div class="hero-section">

                  <div class="hero-text mdl-typography--text-center">
                    <h1 class="mdl-typography--display-2">7C Concession App</h1>
                      <p class="mdl-typography--display-1">
                        It's Like Grubhub, but not really.
                      </p>
                  </div>
      
                </div>

                <div id="intro1" class="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}}>
                  <div class="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p class="mdl-typography--headline">
                      Browse Your Options    
                    </p>
                    <p>
                      Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave.
                    </p>
                  </div>
                  <div class="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/couple_looking_menu.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                    </img>
                  </div>
                </div>

                <div id="intro2" class="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}}>
                  <div class="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p class="mdl-typography--headline">
                      Pick and Choose   
                    </p>
                    <p>
                      Limitless options at your fingertips. Once you decide on what you want, add them to your cart with one simple click.
                    </p>
                  </div>
                  <div class="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/women_selecting_food.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                    </img>
                  </div>
                </div>
              
                <div id="intro3" class="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}} >
                  <div class="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p class="mdl-typography--headline">
                      Confirm Your Order  
                    </p>
                    <p>
                      Let us know you want your food. Wherever you're sitting, we'll tell our people where to deliver your food. Every time.
                    </p>
                  </div>
                  <div class="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/food_deliver_stadium.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                    </img>
                  </div>
                </div>
                    
              </div>
            
            </div>

              <div id="intro" class="mdl-grid intro-section--no-spacing fullwidth-panel1" style={{paddingTop: '100px', paddingBottom: '25px'}}>
                  <div class="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p class="mdl-typography--headline">
                      About this App  
                    </p>
                  </div>
                  <div class="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum consectetur natus sequi, est similique! Temporibus rem consequuntur laudantium, illo excepturi velit quas. Culpa ipsum dolor tempore accusantium sed iusto.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, dicta aliquid, inventore a ullam excepturi similique sit, nobis incidunt laboriosam amet maxime iusto nam facilis possimus quo optio? Dolor, et?
                    </p>
                  </div>
                </div>

            {/* <Footer class="mdl-mini-footer">
              <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">7C Concession App &ndash; designed by a lot of people</div>
                <ul class="mdl-mini-footer__link-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy & Terms</a></li>
                </ul>
                &copy; Team 7C Fall 2019
              </div>
            </Footer> */}
          </div>
            
        );
    }
}

export default App;
