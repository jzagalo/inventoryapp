import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';
import { persistStore } from 'redux-persist';

const middleware = [thunk];
const store = createStore(combineReducers,
	    compose(
	        applyMiddleware(...middleware)
	        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	    )
	);
let persistor = persistStore(store)

let storeObj = { store, persistor};

export default storeObj;
	


