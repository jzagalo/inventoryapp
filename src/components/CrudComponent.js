import React, { Component } from 'react';
import { Form, Button, Header, Table } from 'semantic-ui-react';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
import SearchInput from './SearchInput';
import { connect } from 'react-redux';
import {addProduct, deleteProduct, onEditSubmitProduct } from "../actions/postActions"



class CrudComponent extends Component {

    constructor(props) {
        super(props);
       
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = {
          searchTerm : ''
        };
       
    }

    componentWillMount() {
         
    } 

    handleUserInput(soughtTerm){
      this.setState({
        searchTerm: soughtTerm
      });
    }   
    onAdd(name, price, quantity, category) {     
      this.props.addProduct({
        name,
        price,
        quantity,
        category
      })    
    }
    
    onDelete(name) {        
      this.props.deleteProduct(name);
    }

    onEditSubmit(name, price, quantity, category, originalName) {
      this.props.onEditSubmitProduct({ name,
                                       price,
                                       quantity,
                                       category,
                                       originalName
                                     });
    }
   

    render() {    
         
         let filteredProducts = this.props.products.products.filter(product => {
            return product.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
         });

         return(
          <div>
           <SearchInput filteredText={this.state.searchTerm}
            onUserInput={this.handleUserInput}  />
           <AddProduct onAdd = {this.onAdd} />

            {
              filteredProducts.map((product, index) => {           
                return( 
                  <ProductItem  
                  key={ product.name + index }
                  {...product } 
                  onDelete = {this.onDelete}
                  onEditSubmit = { this.onEditSubmit } 
                  filteredText = { this.state.searchTerm }  />
                  
                );
              })
           }
         </div>
       )
     }
     
}


const mapStateToProps = state =>({
   products: state.products
});

export default connect(mapStateToProps,{ addProduct, deleteProduct, onEditSubmitProduct })(CrudComponent);
