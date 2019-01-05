import React, { Component } from 'react';
import { Form, Button, Header, Table } from 'semantic-ui-react';
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'
import { connect } from 'react-redux';
 import {addProduct } from "../actions/postActions"



class CrudComponent extends Component {

    constructor(props) {
        super(props);
       
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentWillMount() {
       const products = this.props.products;     
    }    

    getProducts(){
       return this.props.products.products;          
    }

    onAdd(name, price, quantity, category) {
     // const products = this.props.products.products;
      this.props.addProduct({
        name,
        price,
        quantity,
        category
      })    
    }
    
    onDelete(name) {
      /*const products = this.getProducts();
      const filteredProduct = products.filter(product => {
         return product.name !== name;
      }); 

      this.setState({ products: filteredProduct });*/
    }

    onEditSubmit(name, price, quantity, category, originalName) {
      /*let products = this.getProducts();

      products = products.map(product => {
        if(product.name === originalName){
           product.name = name;
           product.price = price;
           product.quantity = quantity;
           product.category = category
        }

        return product;
      });

      this.setState({ products });*/
    }
   

    render() {    
     
         return(
          <div>
           <AddProduct onAdd = {this.onAdd} />
            {
              this.props.products.products.map(product => {           
                return( 
                  <ProductItem  
                  key={ product.name }
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

export default connect(mapStateToProps,{ addProduct })(CrudComponent);
