import { combineReducers } from 'redux';
import crudReducer from './crudReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const productConfig = {
    key: 'products',
    storage,
    whitelist: ['products']
};

const productPersist = persistReducer(productConfig, crudReducer);

export default combineReducers({
    products: productPersist
})