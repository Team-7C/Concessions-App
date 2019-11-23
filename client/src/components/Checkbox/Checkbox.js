import React from 'react';
import './Checkbox.css'


class Checkbox extends React.Component {

    handleCheckbox() {

    }

	render() {

		return (
			<div>
                <header className="food">Food</header>
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Hamburger
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Sandwich
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Pizza
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Pasta
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Burrito

                <header className="food">Snack</header>
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Chip
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Cookie
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Popcorn
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Candy

                <header className="food">Drink</header>
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Soda
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Tea
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Coffee
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Milk
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Juice

                <header className="food">Desert</header>
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Ice cream
                <input type="checkbox" onChange={this.handleCheckbox} 
                />Cake
                <header className="food">Other</header>
			</div>
		);
	}
}
export default Checkbox;