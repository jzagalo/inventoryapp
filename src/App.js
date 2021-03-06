import React, { Component } from 'react';
import store from './store';
//import Posts from './components/Posts';
//import PostForm from './components/PostForm';
import './App.css';
import { Provider } from 'react-redux';
import CrudComponent from './components/CrudComponent'
import Sidebar from './components/Sidebar'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App" id="container">
            <Sidebar/>
            <CrudComponent />
          </div>
        </Provider>
    );
  }
}

export default App;
