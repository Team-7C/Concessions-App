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
        var extras = [];

        // console.log(meal)
     
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

        //console.log("filtered3 results",filtered3)

        function findExtras(item, number) {
            console.log(number)
            console.log(item.addons[number])
            if(item.addons[number]){
                return(
                    <div className = "card">
                    <div className = "info">
                        <div className = "name">{item.addons[number].desc}</div>
                        <div className = "position">${item.addons[number].upcharge}</div>
                        <input type="checkbox" onChange={() => addToCart(cloneDeep(item.addons[number]))}/>
                    </div>
                </div>
                );  
            }    
        }

        const extraList = filtered3.map(items => {
            items.addons.map(addons => {
                // console.log(addons)
                
            })
		});

		const itemList = filtered3.map(items => {
			return (                
                <div className = "card">
                    <div className = "info">
                        <div className = "name">{items.name}</div>
                        <div className = "position">${items.base_price}</div>
                        <button class = "btn--blue" onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(items))}}> Add to Cart </button>
                        {/* modal code below... preferably the modal should show a card for each addon */}
                        <label class="btn" for={items.id}>Extra Options</label>
                        <input class="modal-state" id={items.id} type="checkbox" />
                        <div class="modal">
                            <label class="modal__bg" for={items.id}></label>
                            <div class="modal__inner">
                                <label class="modal__close" for={items.id}></label>
                                <h2>{items.name} Extra Options:</h2>
                                {findExtras(items,0)}
                                {findExtras(items,1)}
                                {findExtras(items,2)}
                                {findExtras(items,3)}
                                {findExtras(items,4)}
                                <button className = "btn--blue3" onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(items))}}> Add Main Item and Extras to Cart </button>
                                {/*add someway to close modal by clicking button*/}
                                <button className = "btn--blue2" onClick={(a) => {a.preventDefault();}}> Add Extras to Cart </button>
                            </div>
                        </div>
                    </div>

                </div>
			);
		});

        
		return (<div>{itemList}</div>);
	}
}
export default ItemList;