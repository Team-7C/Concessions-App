import React from 'react';
import NumberFormat from 'react-number-format';

class Search extends React.Component {

    vendorUpdate() {
        const val = this.searchValue.value;
        this.props.vendorUpdate(val)
    }
    
	render() {

        const textUpdate = this.props.textUpdate;
        const priceUpdate = this.props.priceUpdate;

		return (
			<div>
                <p>SEARCH: &nbsp;
                    <input type="text" ref="search" class="text" placeholder="search" onChange={() => {
                    textUpdate(this.refs.search.value)}} />
                </p> 
                <p>PRICE: &nbsp;
                    <NumberFormat
                        ref="minPrice"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Min"
                        onChange={() => {priceUpdate(this.refs.minPrice.value, this.refs.maxPrice.value)}}
                    />
                    &nbsp; &lt; &nbsp;
                    <NumberFormat
                        ref="maxPrice"
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Max"
                        onChange={() => {console.log(this.refs.maxPrice.value);priceUpdate(this.refs.minPrice.value, this.refs.maxPrice.value)}}
                    />
                </p>
                {/*
                <p>VENDOR: &nbsp;
                    <input 
                        type="text"
                        placeholder="Filter by Vendor"
                        ref={ (value) => this.searchValue = value }
                        onChange={this.vendorUpdate.bind(this)}
                    />
                </p>
                */}
			</div>
		);
	}
}
export default Search;