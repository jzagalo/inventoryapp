import React, { Component } from 'react'

class AddProduct extends Component {
	constructor(props){
		super(props);

		this.onSubmit= this.onSubmit.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		this.props.onAdd(
		 this.nameInput.value,
		 this.priceInput.value,
		 this.quantityInput.value,
		 this.categoryInput.value
		 );

		this.nameInput.value = this.priceInput.value = this.quantityInput.value = this.categoryInput.value ='';
		
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<h3> Add Product </h3>
					<input placeholder="Name"  ref={nameInput => this.nameInput = nameInput} />
					<input placeholder="Category"  ref={categoryInput => this.categoryInput = categoryInput} />
					<input placeholder="Price" type="number" ref={priceInput => this.priceInput = priceInput} />
					<input placeholder="Quantity" ref={quantityInput => this.quantityInput = quantityInput} />
					<button>Add </button>
					<hr />
				</form>
			</div>
		);
	}
}

export default AddProduct;