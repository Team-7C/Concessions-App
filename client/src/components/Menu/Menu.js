import React from 'react';
import './Menu.css';
import Search from '../Search/Search';
import ItemList from './ItemList.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterMinPrice: 0,
            filterMaxPrice: 10000000,
            filterVendor: ''
        };

        this.textUpdate = this.textUpdate.bind(this);
        this.priceUpdate = this.priceUpdate.bind(this);
    }

    textUpdate(value) {
        //set the text inside the search bar to value
        this.setState({
          filterText: value
        })
    }

    priceUpdate(val1, val2) {
        if(val1) {
        this.setState({
            filterMinPrice: val1
        })
        }
    else if(val2) {
        this.setState({
            filterMaxPrice: val2
        })
    }
    }

    vendorUpdate(value) {
        this.setState({
          filterVendor: value
        })
    }

    render() {
        const data = this.props.data;
        const addToCart = this.props.addToCart;

        return (

            <div className="row">
            <img 
            src={ require('../../assets/home_food.jpg') } 
            alt="food background"
            className = "background-menu" 
           />

                <div className="column1">

                    <Search 
                        filterText={this.state.filterText} 
                        textUpdate={this.textUpdate}
                        priceUpdate={this.priceUpdate}
                        filterVendor={this.filterVendor}   
                        vendorUpdate={this.vendorUpdate.bind(this)
                        }
                    />
                    {/*
                    <p className="title">SHOPPING CART </p>
                    <div>
                        <button className="button">Add</button>
                        <button className="button">Remove</button>
                         List of my items go here
                    </div>
                    */}

                </div>

                <div className="column2" >
                    <ItemList items={data.items} addToCart={addToCart} filtertext={this.state.filterText}
                    filterMinPrice={this.state.filterMinPrice} filterMaxPrice={this.state.filterMaxPrice} 
                     />
                    {/*<p className="title">ITEM LIST </p>
                        <div className="list">
                            <p className="item">Food</p>
                            <p className="item">Drink</p>
                            <p className="item">Other</p>
                        </div>
                    */}
                    </div>
            </div>
        );
    }
}

export default Menu;