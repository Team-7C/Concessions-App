import React from 'react';
import './Menu.css';
import cloneDeep from 'lodash/cloneDeep';

class ItemList extends React.Component {
	render() {
        const data = this.props.items;
        const addToCart = this.props.addToCart;

        function contains(object) {
			return (object.name.toLowerCase()).includes('');
		}

		const filtered = data.filter(contains)
		const itemList = filtered.map(item => {
			return (                
                <div className='item'>
                <img 
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
				</div>
                </div>
			);
		});

		return (<div>{itemList}</div>);
	}
}
export default ItemList;