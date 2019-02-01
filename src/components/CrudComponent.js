import React, { Component } from 'react';
import { Form, Button, Header, Table } from 'semantic-ui-react';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
import { connect } from 'react-redux';
import {addProduct, deleteProduct, onEditSubmitProduct } from "../actions/postActions"



class CrudComponent extends Component {

    constructor(props) {
        super(props);
       
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentWillMount() {
         
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
     
         return(
          <div>
           <AddProduct onAdd = {this.onAdd} />
            {
              this.props.products.products.map((product, index) => {           
                return( 
                  <ProductItem  
                  key={ product.name + index }
                  {...product } 
                  onDelete = {this.onDelete}
                  onEditSubmit = {this.onEditSubmit }   />
                  
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
