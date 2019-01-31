import {ADD_PRODUCT} from './../actions/types';

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
	 switch (action.type) {
        case ADD_PRODUCT:
        	let _state = { ...state, products: [ ...state.products ]};
            _state.products.unshift(action.payload);         
            return _state;
        default:
            return state;
    }

}

