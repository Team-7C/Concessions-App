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

                        <label class="btn" for="modal-1">Extra Options</label>
                            <input class="modal-state" id="modal-1" type="checkbox" />
                            <div class="modal">
                                <label class="modal__bg" for="modal-1"></label>
                                <div class="modal__inner">
                                    <label class="modal__close" for="modal-1"></label>
                                    <h2>Caaaats FTW!</h2>
                                    <p><img src="https://i.imgur.com/HnrkBwB.gif" alt="" />Aliquam in sagittis nulla. Curabitur euismod diam eget risus venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.</p>
                                </div>
                            </div>
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