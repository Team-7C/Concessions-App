import React from 'react';

class ItemList extends React.Component {
	render() {
        const data = this.props.items;

        function contains(object) {
			return (object.name.toLowerCase()).includes('');
		}

		const filtered = data.filter(contains)
		const itemList = filtered.map(item => {
			return (
				<tr key={item.name} onClick={() => {
					 
				   }}>
					<td>{item.id} </td>	
					<td> {item.name} </td>
				</tr>
			);
		});

		return <div>{itemList}</div>;
	}
}
export default ItemList;