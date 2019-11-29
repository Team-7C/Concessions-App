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
        const itemData = this.props.itemData;
        const addToCart = this.props.addToCart;

        return (

            <div class="mdl-grid no-spacing">
                  <div class="mdl-cell mdl-cell--3-col mdl-typography--text-center">
                    <Search 
                        filterText={this.state.filterText} 
                        textUpdate={this.textUpdate}
                        priceUpdate={this.priceUpdate}
                        filterVendor={this.filterVendor}   
                        vendorUpdate={this.vendorUpdate.bind(this)
                        }
                    />
                  </div>
                  <div class="mdl-cell mdl-cell--9-col">
                    <ItemList items={itemData.items} addToCart={addToCart} filtertext={this.state.filterText}
                    filterMinPrice={this.state.filterMinPrice} filterMaxPrice={this.state.filterMaxPrice} 
                     />
                  </div>
            </div>

        );
    }
}

export default Menu;