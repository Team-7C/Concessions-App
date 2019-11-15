import React from 'react';

class CartItems extends React.Component {
	render() {
        const data = this.props.cart;

		const itemList = data.map(item => {
			return (                
				<div >
                       <br/>
                       <a> {item.name}  </a>
                        <a> ${item.base_price} </a>
				    </div>
			);
		});

		return (<div>{itemList}</div>);
	}
}
export default CartItems;