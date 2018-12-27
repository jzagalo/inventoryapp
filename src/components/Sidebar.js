import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Sidebar extends Component {

    render(){
        return (
            <nav>
                <ul>
                    <li>
                        <a href='#'> <Icon name="list" />  </a>
                    </li>
                    <li>
                      <a href='#'><Icon name="edit" /> </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;