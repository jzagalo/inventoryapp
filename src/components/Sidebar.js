import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CrudComponent from './CrudComponent'
import overviewComponent from './overviewComponent'

class Sidebar extends Component {

    render(){
        return (
            <Router>
                <div  id="container">   
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> 
                                <Icon name="list" />  
                            </Link>
                        </li>
                        <li>
                          <Link to='/overview'>
                            <Icon name="edit" /> 
                          </Link>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <Route exact path="/"  component={CrudComponent}/>
                    <Route  path="/overview"  component={overviewComponent}/>
                </div>
                </div>
            </Router>
        );
    }
}

export default Sidebar;