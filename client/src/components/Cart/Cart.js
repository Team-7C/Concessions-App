import React from 'react';
import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="mainContainer">
            
                <div id="cartBox">
                    <div><b id="cartTitle">Cart</b></div>
                    <div id="itemsBox">
                        <b id="confirmTitle">Please confirm your purchases:</b>
                        <div id="items"></div>
                    </div>
                    <input id="checkoutButton" type="button" value="Checkout"
                    onChange={(e) => console.log(e)}/>
                </div>
            </div>
        );
    }
}

export default Cart;