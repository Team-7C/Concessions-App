import React from 'react';
import './Menu.css';
import cloneDeep from 'lodash/cloneDeep';
import {Grid, Cell, Card, CardTitle, Button, CardActions, Icon, CardText} from 'react-mdl';

class ItemList extends React.Component {
	render() {
        const data = this.props.items;
        const addToCart = this.props.addToCart;
        const filtertext = this.props.filtertext;
        const min = this.props.filterMinPrice;
        const max = this.props.filterMaxPrice;
        console.log(filtertext);

        function contains(object) {
			return (object.name.toLowerCase()).includes(filtertext.toLowerCase());
        }
        
        function price(object) {
			return (object.base_price >= min && object.base_price <= max);
		}

		const filtered = data.filter(contains)
        const filtered2 = filtered.filter(price)
        
        
		const itemList = filtered.map(item => {
			return (                
                <div>
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}> {item.name}</CardTitle>
                        <CardText>
                            {/* {item.name}<br /> */}
                            ${item.base_price}<br />
                        </CardText>
                        <CardActions border>
                            <Button colored onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(item))}}>Get Started</Button>
                            <div className="mdl-layout-spacer"></div>
                            <Icon name="shopping_cart" />
                        </CardActions>
                    </Card>
                    {/* <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
                        <CardTitle expand style={{alignItems: 'flex-start', color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                            <h4 style={{marginTop: '0'}}>
                                {item.name}<br />
                                ${item.base_price}<br />
                            </h4>
                        </CardTitle>
                        <CardActions border style={{borderColor: 'rgba(250, 190, 88, 1)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                            <Button style={{color: 'white'}} onClick={(a) => {a.preventDefault(); addToCart(cloneDeep(item))}}>Add to Cart</Button>
                            <div className="mdl-layout-spacer"></div>
                            <Icon name="shopping_cart" />
                        </CardActions>
                    </Card> */}
                {/* <img 
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
				</div> */}
                </div>
			);
		});

		return (<div>{itemList}</div>);
	}
}
export default ItemList;