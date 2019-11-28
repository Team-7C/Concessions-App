import React from 'react';
import './Checkbox.css'
import NumberFormat from 'react-number-format';


class Checkbox extends React.Component {
	render() {
        const typeUpdate = this.props.typeUpdate
        var meal = this.props.meal;
        var snack = this.props.snack;
        var drink = this.props.drink;
        var dessert = this.props.dessert;
        var other = this.props.other;


        function temp(x) {
            if (x === "Meal") {
                meal = !meal
                typeUpdate(meal, x);
            }
            else if (x === "Snack") {
                snack = !snack;
                typeUpdate(snack, x);
            }
            else if (x === "Drink") {
                drink = !drink
                typeUpdate(drink, x);
            }
            else if (x === "Dessert") {
                dessert = !dessert
                typeUpdate(dessert, x);
            }
            else {
                other = !other
                typeUpdate(other);
            }
        }

		return (
			<div className="checkbox">
                <header className="food">Meal</header>
                <input type="checkbox" onChange={() => {temp("Meal")}}
                />
                <header className="food">Snack</header>
                <input type="checkbox" onChange={() => {temp("Snack")}} 
                />
                <header className="food">Drink</header>
                <input type="checkbox" onChange={() => {temp("Drink")}} 
                />
                <header className="food">Dessert</header>
                <input type="checkbox" onChange={() => {temp("Dessert")}} 
                />
                <header className="food">Other</header>
                <input type="checkbox" onChange={() => {temp("Other")}} 
                />
			</div>
		);
	}
}
export default Checkbox;