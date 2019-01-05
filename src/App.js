import React, { Component } from 'react';
import storeObj from './store';
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar'
import 'semantic-ui-css/semantic.min.css';  


let { persistor, store } = storeObj;
class App extends Component {
  render() {
    return (
        <Provider store={store}> 
         <PersistGate loading={null}  persistor={persistor}>              
            <Sidebar/> 
         </PersistGate>        
        </Provider>
    );
  }
}

export default App;
