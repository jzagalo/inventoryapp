import React, { Component } from 'react';


class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
		this.onEditCancel = this.onEditCancel.bind(this);

		this.state = {
			isEdit: false	
		}; 
	}

	onEdit(){
		this.setState({
			isEdit: true
		});
	}

	onDelete() {
		const { onDelete, name } = this.props;
		onDelete(name);
	}

	onEditSubmit() {
		this.props.onEditSubmit(
			this.nameInput.value, 
			this.priceInput.value,
			this.quantityInput.value,
			this.categoryInput.value,
			this.props.name);
		this.setState({
			isEdit: false
		});
	}

	onEditCancel() {
		this.setState({
			isEdit:false
		});
	}

	render() {
       
		const { name, onDelete, price, quantity, category } = this.props;		
		return(
			<div>
			{ this.state.isEdit ? 
				(
					<div>					
						<input placeholder="Name"  ref={nameInput => this.nameInput = nameInput} defaultValue={this.props.name} />
						<input placeholder="Category" ref={categoryInput => this.categoryInput =  categoryInput} defaultValue={this.props.category} />
						<input placeholder="Price" type="number" ref={priceInput => this.priceInput = priceInput} defaultValue={this.props.price} />
						<input placeholder="Quantity"  type="number" ref={quantityInput => this.quantityInput = quantityInput} defaultValue={this.props.quantity} />
						
						<button onClick={this.onEditSubmit}>Save</button>
						<button onClick={this.onEditCancel}>Cancel</button>
						<hr />
				    </div>
				) :
				(
					<div> 
		                <span>{name}</span> {' | '}
		                <span>{category}</span>  {' | '}
		                <span>{price}</span>  {' | '}
		                <span> {quantity} </span> {' | '}		               
		                <span>{price * quantity}</span> {' | '}
		                <button onClick={ this.onEdit }>Edit</button>
		                <button onClick={ this.onDelete } >Delete</button>
		            </div>	
	            )
	        }
            </div>
		);

	}
}

export default ProductItem;