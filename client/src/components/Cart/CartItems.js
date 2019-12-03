import React from 'react';
import './Cart.css';

class CartItems extends React.Component {
	render() {
		const data = this.props.cart;
		const itemRemove = this.props.cartRemove;

		function remove(item) {
			itemRemove(item);
		}
		//add way to total item properly in screen

		const itemList = data.map(item => {
			if(!item.name)
			{
				return(
					<div className="itemCard">
							<br/>
							<a> Add On:  {item.desc}  </a>
							<a> ${item.upcharge} </a>
							<button 
							onClick={(a) => {a.preventDefault(); remove(item.name)}}
						> 
						REMOVE 
						</button>
						</div>
				)
			} else {
				return ( 
					<div className="itemCard">               
						<br/>
						<a> {item.name}  </a>
						<a> ${item.base_price} </a>
						<button 
							onClick={(a) => {a.preventDefault(); remove(item.name)}}
						> 
						REMOVE 
						</button>
					</div>
				);
			}
		
		});

		return (<div>{itemList}</div>);
	}
}
export default CartItems;