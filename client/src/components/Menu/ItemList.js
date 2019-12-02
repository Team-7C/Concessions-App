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

        //console.log("filtered3 results",filtered3)

        function findExtraIndex(item) {
            
            console.log("addons list from find extra function",item.addons)
            let i = 0;
            for(i; i < item.addons.length; i++)
            {
                return(findExtras(item,i));
            }
            
        }

        
        function findExtras(item, number) {
            console.log(item.addons[number])
            return(
                <div className = "card">
                <div className = "info">
                    <div className = "name">{item.addons[number].desc}</div>
                    <div className = "name">{item.addons.length}</div>
                    <div className = "position">${item.addons[number].upcharge}</div>
                    
                </div>
            </div>
            );
        
    }

        const extraList = filtered3.map(items => {
            items.addons.map(addons => {
                console.log(addons)
                
            })
		});

		const itemList = filtered3.map(items => {
			return (                
                <div className = "card">
                    <div className = "info">
                        <div className = "name">{items.name}</div>
                        <div className = "position">${items.base_price}</div>
                        <button onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(items))}}> Add to Cart </button>
                        {/* modal code below... preferably the modal should show a card for each addon */}
                        <label class="btn" for={items.id}>Extra Options</label>
                        <input class="modal-state" id={items.id} type="checkbox" />
                        <div class="modal">
                            <label class="modal__bg" for={items.id}></label>
                            <div class="modal__inner">
                                <label class="modal__close" for={items.id}></label>
                                <h2>{items.name} Extra Options:</h2>
                                {extraList}
                                {findExtraIndex(items)}
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