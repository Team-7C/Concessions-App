import React from 'react';
import NumberFormat from 'react-number-format';
import './Search.css';

class Search extends React.Component {
	render() {
        const textUpdate = this.props.textUpdate;
        const priceUpdate = this.props.priceUpdate;
        const vendorUpdate = this.props.vendorUpdate;

		return (
			<div >
                <p style = {{fontSize: '17px', fontStyle: 'italic'}}>SEARCH: &nbsp;
                    <img src={ require('../../assets/search.png')} alt="search logo" className = "search_logo"/>
                    <input 
                        type="text" 
                        ref="search" 
                        className="text" 
                        placeholder="search" 
                        onChange={() => { console.log(this.refs.search.value)
                        textUpdate(this.refs.search.value)}} 
                    />
                </p> 
                <p style = {{fontSize: '17px', fontStyle: 'italic'}}>PRICE: &nbsp;
                    <img src={ require('../../assets/price.png')} alt="price logo" className = "price_logo"/>
                    <NumberFormat
                        ref="min"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Min"
                        onChange={() => {priceUpdate(this.refs.min.state.numAsString, 0)}}
                    />
                    &nbsp; &lt; &nbsp;
                    <NumberFormat
                        ref="max"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Max"
                        onChange={() => {priceUpdate(this.refs.max.state.numAsString, 1) }}
                    />
                </p>
                <p style = {{fontSize: '17px', fontStyle: 'italic'}}>VENDOR: &nbsp;
                    <img src={ require('../../assets/vendor.png')} alt="vendor logo" className = "vendor_logo"/>
                    <input 
                        type="text"
                        ref="ven"
                        placeholder="Filter by Vendor"
                        onChange={() => {vendorUpdate(this.refs.search.value)}}
                    />
                </p>
			</div>
		);
	}
}
export default Search;