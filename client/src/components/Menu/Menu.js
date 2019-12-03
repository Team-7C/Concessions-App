import React from 'react';
import './Menu.css';
import Search from '../Search/Search';
import ItemList from './ItemList.js';
import Checkbox from '../Checkbox/Checkbox';
import {Footer} from 'react-mdl';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterMinPrice: 0,
            filterMaxPrice: 10000000,
            filterVendor: '',
            meal: false,
            snack: false,
            drink: false,
            dessert: false,
            other: false
        };

        this.textUpdate = this.textUpdate.bind(this);
        this.priceUpdate = this.priceUpdate.bind(this);
        this.vendorUpdate = this.vendorUpdate.bind(this);
        this.typeUpdate = this.typeUpdate.bind(this);
    }

    textUpdate(value) {
        this.setState({
          filterText: value
        })
    }

    priceUpdate(newPrice, x) {
        if(newPrice === "") {
            this.setState({
                filterMinPrice: 0,
                filterMaxPrice: 10000000
            })
        }
        else if (x === 0) {
            this.setState({
                filterMinPrice: newPrice
            })
        }
        else {
            this.setState({
                filterMaxPrice: newPrice
            })
        }
    }

    vendorUpdate(ven) {
        this.setState({
          filterVendor: ven
        })
    }

    typeUpdate(selected, type) {
        console.log(selected)
        if (type === "Meal") {
            this.setState({
                meal: selected
            })
        }
        else if (type === "Snack") {
            this.setState({
                snack: selected
            })
        }
        else if (type === "Drink") {
            this.setState({
                drink: selected
            })
        }
        else if (type === "Dessert") {
            this.setState({
                dessert: selected
            })
        }
        else {
            this.setState({
                other: selected
            })
        }
    }

    render() {
        const itemData = this.props.itemData;
        const addToCart = this.props.addToCart;

        return (
            <div className="menuMain">
              <div className="menuContainer">
                <div class="mdl-grid no-spacing" style = {{backgroundColor: "rgba(190, 190, 190, 0.6)"}}>
                    <div class="mdl-cell mdl-cell--4-col">
                        <div className = "section" style = {{textAlign:'center'}}>
                        <Search 
                            filterText={this.state.filterText} 
                            textUpdate={this.textUpdate}
                            filterMinPrice={this.state.filterMinPrice} 
                            filterMaxPrice={this.state.filterMaxPrice}
                            priceUpdate={this.priceUpdate} 
                            vendorUpdate={this.vendorUpdate}
                        />
                        <Checkbox 
                            filterType={this.state.filterType}
                            typeUpdate={this.typeUpdate}
                            meal={this.state.meal}
                            snack={this.state.snack}
                            drink={this.state.drink}
                            dessert={this.state.dessert}
                            other={this.state.other}
                        />
                        </div>
                    
                    </div>
                    <div class="mdl-cell mdl-cell--8-col">
                        <ItemList 
                            items={itemData.items} 
                            addToCart={addToCart} 
                            filtertext={this.state.filterText}
                            filterMinPrice={this.state.filterMinPrice} 
                            filterMaxPrice={this.state.filterMaxPrice}
                            meal={this.state.meal}
                            snack={this.state.snack}
                            drink={this.state.drink}
                            dessert={this.state.dessert}
                            other={this.state.other}
                        />
                    </div>
                </div>
              </div>
            </div>
        );
    }
}


export default Menu;