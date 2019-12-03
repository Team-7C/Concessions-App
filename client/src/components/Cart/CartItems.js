import React from 'react';

class CartItems extends React.Component {
	render() {
        const data = this.props.cart;
		//add way to total item properly in screen
		const itemList = data.map(item => {
			if(!item.name)
			{
				return(
					<div>
						<br/>
                        <a> {item.desc}  </a>
                        <a> ${item.upcharge} </a>
					</div>
					
				)
			}

			else{
				return (                
					<div >
						   <br/>
						   <a> {item.name}  </a>
							<a> ${item.base_price} </a>
						</div>
				);
			}
		
		});

		return (<div>{itemList}</div>);
	}
}
export default CartItems;