import React from 'react';
import './Menu.css';
import cloneDeep from 'lodash/cloneDeep';
import {Grid, Cell, Card, CardTitle, Button, CardActions, Icon, CardText} from 'react-mdl';

class ItemList extends React.Component {
	render() {
        const data = this.props.items;
        const addToCart = this.props.addToCart;
        const filtertext = this.props.filtertext;
        const min = this.props.filterMinPrice;
        const max = this.props.filterMaxPrice;
        var meal = this.props.meal
        var snack = this.props.snack
        var drink = this.props.drink
        var dessert = this.props.dessert
        var other = this.props.other
        console.log(meal)
     
        function contains(object) {
			return (object.name.toLowerCase()).includes(filtertext.toLowerCase());
        }
        
        function price(object) {
			return (object.base_price >= min && object.base_price <= max);
        }

        function temp(selected, type) {
            if (selected) {
                return type;
            }
            else {
                return "";
            }
        }
        
        function myType(object) {

            if (!meal && !snack && !drink && !dessert && !other) {
                return object.type.includes("");
            }

            else {
                console.log(meal)
                return (
                    (object.type === temp(meal, "Meal")) ||
                    (object.type === temp(snack, "Snack")) ||
                    (object.type === temp(drink, "Drink")) ||
                    (object.type === temp(dessert, "Dessert")) ||
                    (object.type === temp(other, "Other"))
                );
            }
        }

		const filtered = data.filter(contains)
        const filtered2 = filtered.filter(price)
        const filtered3 = filtered2.filter(myType)
        
        
		const itemList = filtered3.map(item => {
			return (                
                <div className = "card">
                    <div className = "info">
                        <div className = "name">{item.name}</div>
                        <div className = "position">${item.base_price}</div>
                        <button onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(item))}}> Add to Cart </button>
                    </div>
                   

                {/* <img 
                 src={ require('../../assets/popcorn.PNG') } 
                 alt="food background"
                 className = "food_pic" 
                />
				<div className='rightcol' onClick={() => {
				   }}>
                       <br/>
                       <a className='foodtext'> {item.name} </a>
                        <br/>
                        <a className='foodtext'> ${item.base_price} </a>
                        <button onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(item))}}> Add to Cart </button>
				</div> */}
                </div>
			);
		});

		return (<div>{itemList}</div>);
	}
}
export default ItemList;