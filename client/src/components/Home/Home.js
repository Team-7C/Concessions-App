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
            <div className="mdl-layout__tab-panel is-active" id="fixed-tab-1">

              <div className="page-content">
                
                <div className="hero-section">

                  <div className="hero-text mdl-typography--text-center">
                    <h1 className="mdl-typography--display-4 mdl-typography--font-regular">Chomper</h1>
                      <p className="mdl-typography--headline">
                        It's Like Grubhub, but not really.
                      </p>
                  </div>
      
                </div>

                <div id="intro1" className="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}}>
                  <div className="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p className="mdl-typography--display-3">
                      Browse Your Options    
                    </p>
                    <p class="paragraphs">
                      Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave.
                    </p>
                  </div>
                  <div className="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/couple_looking_menu.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    </img>
                  </div>
                </div>

                <div id="intro2" className="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}}>
                  <div className="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p className="mdl-typography--display-3">
                      Pick and Choose   
                    </p>
                    <p class="paragraphs">
                      Limitless options at your fingertips. Once you decide on what you want, add them to your cart with one simple click.
                    </p>
                  </div>
                  <div className="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/women_selecting_food.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    </img>
                  </div>
                </div>
              
                <div id="intro3" className="mdl-grid intro-section--no-spacing fullwidth-panel" style={{paddingTop: '50px', paddingBottom: '50px'}} >
                  <div className="about mdl-cell mdl-cell--6-col mdl-typography--text-center">
                    <p className="mdl-typography--display-3">
                      Confirm Your Order  
                    </p>
                    <p class="paragraphs">
                      Let us know you want your food. Wherever you're sitting, we'll tell our people where to deliver your food. Every time.
                    </p>
                  </div>
                  <div className="about mdl-cell mdl-cell--6-col ">
                    <img
                    src={ require('../../assets/food_deliver_stadium.jpg') } 
                    alt="food background" 
                    style = {{height: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    </img>
                  </div>
                </div>
                    
              </div>
            
            </div>
            <Footer class="mdl-mini-footer mdl-color--grey-500">
              <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">Chomper &ndash; designed by a lot of people</div>
                <ul class="mdl-mini-footer__link-list">
                  
                </ul>
                &copy; Team 7C Fall 2019
              </div>
            </Footer>
          </div>
        );
    }
}

export default App;
