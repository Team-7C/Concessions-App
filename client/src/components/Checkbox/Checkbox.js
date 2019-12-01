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
			<div style = {{display: 'inline-block'}}>
                <header className = "food">Filter by:</header>
                <label className = "food"><input type="checkbox" onChange={() => {temp("Meal")}}/>Meal</label>
                
                <label className = "food"><input type="checkbox" onChange={() => {temp("Snack")}}/>Snack</label>
                
                <label className = "food"><input type="checkbox" onChange={() => {temp("Drink")}}/>Drink</label>
                
                <label className = "food"><input type="checkbox" onChange={() => {temp("Dessert")}}/>Dessert</label>
                
               <label className = "food"><input type="checkbox" onChange={() => {temp("Other")}}/>Other</label> 
			</div>
		);
	}
}
export default Checkbox;