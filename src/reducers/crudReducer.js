import {ADD_PRODUCT, DELETE_PRODUCT, ON_EDIT_SUBMIT } from './../actions/types';

let initialState = {
  products: [
    {
      name: 'iPad',
      price: 200,
      quantity: 1,
      category: 'electronics'
    },
    {
      name: 'iPhone',
      price: 650,
      quantity: 5,
      category: 'electronics'
    }
 ]
};

export default function crudReducer(state=initialState, action){
  let _state = { ...state, products: [ ...state.products ]};

	 switch (action.type) {
        case ADD_PRODUCT:        	  
            _state.products.unshift(action.payload);         
            return _state;

        case DELETE_PRODUCT:
           let filteredResult =  _state.products.filter(product => {            
               return product.name !== action.payload;
            });  

            _state.products = filteredResult;
            return _state; 

        case ON_EDIT_SUBMIT:
            let {name, price, quantity, category, originalName} = action.payload; 
            let editedResult =  _state.products.map (product => {            
               if(product.name === originalName){
                   product.name = name;
                   product.price = price;
                   product.quantity = quantity;
                   product.category = category;
               }
               return product;
            });  

            _state.products = editedResult;
            return _state;
              
        default:
            return state;
    }

}

