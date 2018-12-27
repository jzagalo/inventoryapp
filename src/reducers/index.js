import { combineReducers } from 'redux';
import postReducer from './postReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const postConfig = {
    key: 'postConfig',
    storage,
    whitelist: ['items', 'item']
};

const postPersist = persistReducer(postConfig, postReducer);

export default combineReducers({
    posts:postPersist
})