import {ADD_PRODUCT} from './../actions/types';


export default function crudReducer(state={
	products: [{
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
}]
}, action){
	 switch (action.type) {
        case ADD_PRODUCT:
        	let _state = { ...state}
        	_state.products.unshift(action.payload);
            return _state;
        default:
            return state;
    }

}

