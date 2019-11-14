import React from 'react';
import NumberFormat from 'react-number-format';

class Search extends React.Component {
	textUpdate() {
		const val = this.searchValue.value;
		this.props.textUpdate(val)
    }

    priceUpdate() {
        const val1 = this.filterMin.value;
        const val2 = this.filterMax.value;
        this.props.priceUpdate(val1, val2)
    }

    vendorUpdate() {
        const val = this.searchValue.value;
        this.props.vendorUpdate(val)
    }
    
	render() {
		return (
			<div>
                <p>SEARCH: &nbsp;
                    <input 
                        type="text" 
                        placeholder="Type to Search Your Favorite" 
                        ref={ (value) => this.searchValue = value }
                        onChange={this.textUpdate.bind(this)}
                    />
                </p> 
                <p>PRICE: &nbsp;
                    <NumberFormat
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Min"
                        ref={ (value) => this.filterMin = value }
                        onChange={this.priceUpdate.bind(this)}
                    />
                    &nbsp; &lt; &nbsp;
                    <NumberFormat
                        className="price" 
                        thousandSeparator={true} 
                        prefix={'$'} decimalScale={2} 
                        fixedDecimalScale={true} 
                        placeholder="Max"
                        ref={ (value) => this.filterMax = value }
                        onChange={this.priceUpdate.bind(this)}
                    />
                </p>
                <p>VENDOR: &nbsp;
                    <input 
                        type="text"
                        placeholder="Filter by Vendor"
                        ref={ (value) => this.searchValue = value }
                        onChange={this.vendorUpdate.bind(this)}
                    />
                </p>
			</div>
		);
	}
}
export default Search;