import React from 'react';
import Paypal from './Paypal.js';
import ItemList from './CartItems.js';
import './Cart.css';
import '../Menu/Menu.css'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const cart = this.props.cart;
        const removeItem = this.props.removeItem;

        function cartRemove(item) {
            removeItem(item);
        }

        console.log("current cart items", cart)
        return (
            <div id="mainContainer" className="maincart">
            
                <div id="cartBox" className="cartBox">
                    <h5>Cart</h5>
                    <div id="itemsBox" className="itemsBox">
                        <br/>
                        <div id="items" class="mdl-cell mdl-cell--12-col">
                            <ItemList cart={cart} cartRemove={cartRemove}/> 
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