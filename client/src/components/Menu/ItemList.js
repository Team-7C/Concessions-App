import React from 'react';
import './Menu.css';

class ItemList extends React.Component {
	render() {
        const data = this.props.items;

        function contains(object) {
			return (object.name.toLowerCase()).includes('');
		}

		const filtered = data.filter(contains)
		const itemList = filtered.map(item => {
			return (
                
                <div className='item'>
                <img 
                 src={ require('../../assets/pizza.png') } 
                 alt="food background"
                 className = "food_pic" 
                />
				<div className='rightcol' onClick={() => {
				   }}>
					<a className='foodtext'> {item.id} </a>	
					<a className='foodtext'> {item.name} </a>
				</div>
                </div>
			);
		});
        console.log(itemList);

		return (<div>{itemList}</div>);
	}
}
export default ItemList;