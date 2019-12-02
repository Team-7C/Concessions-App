import React from 'react';
import Paypal from './Paypal.js';
import ItemList from './CartItems.js';
import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const cart = this.props.cart;
        return (
            <div id="mainContainer" className="maincart">
            
                <div id="cartBox">
                    <div><b id="cartTitle">Cart</b></div>
                    <div id="itemsBox">
                        <b id="confirmTitle">Please confirm your purchases:</b>
                        <div id="items" className="items">
                            <ItemList cart={cart}/> 
                        </div>
                    </div>
                    <div className="paypal"> 
                         <Paypal cart={cart}/>
                    </div>
                    {/*<input id="checkoutButton" type="button" value="Checkout"
                    onChange={(e) => console.log(e)}/>*/}
                </div>
            </div>
        );
    }
}

export default Cart;