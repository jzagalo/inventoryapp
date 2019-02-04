import React, { Component } from 'react';

class SearchInput extends Component {
	constructor(props) {
		super(props);		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onUserInput(event.target.value);
	}

	render(){
		return (
			<div>
				Search Product 
				<input type="search" value={this.props.filteredText} 
				 placeholder="Search Product"
				 onChange={this.handleChange}
				  />	
			</div>
		);
	}

}

export default SearchInput;