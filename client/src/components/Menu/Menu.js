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
    }

    textUpdate(value) {
        //set the text inside the search bar to value
        this.setState({
          filterText: value
        })
    }

    priceUpdate(val1, val2) {
        this.setState({
            filterMinPrice: val1,
            filterMaxPrice: val2
        })
    }

    vendorUpdate(value) {
        this.setState({
          filterVendor: value
        })
    }

    render() {
		const data = this.props.data;

        return (
            <div className="row">

                <div className="column1">

                    <Search 
                        filterText={this.state.filterText} 
                        textUpdate={this.textUpdate.bind(this)}
                        filterMinPrice={this.state.filterMinPrice}
                        filterMaxPrice={this.state.filterMaxPrice} 
                        priceUpdate={this.priceUpdate.bind(this)}
                        filterVendor={this.filterVendor}   
                        vendorUpdate={this.vendorUpdate.bind(this)}
                    />
                    <p className="title">SHOPPING CART </p>
                    <div>
                        <button className="button">Add</button>
                        <button className="button">Remove</button>
                         List of my items go here
                    </div>

                </div>

                <div className="column2">
                    <ItemList items={data.items}/>
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