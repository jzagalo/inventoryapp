import React, { Component } from 'react';
import { Form, Button, Header, Table } from 'semantic-ui-react';

class CrudComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'React Simple Crud Application',
            act: 0,
            index: '',
            datas: []
        };
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        if (this.state.act === 0) { // new
            let data = { name, address};
            datas.push(data);
        } else { // Update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
        }


        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
    };

    fEdit = (i) => {
        let data = this.state.datas[i];

        this.refs.name.value = data.name;
        this.refs.address.value = data.address;

        this.setState({
            act: 1,
            index:i
        });

        this.refs.name.focus();
    };

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas,
            act:0,
            index: ''

        });
    };

    render(){
        let datas = this.state.datas;
        let userList = datas.map((data, i) => (
            <Table.Row key={i} className="myList">
                <Table.Cell>{i+1}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.address}</Table.Cell>
                <Table.Cell>
                    <Button primary onClick={() => this.fRemove(i)}>Remove</Button>
                    <Button secondary onClick={() => this.fEdit(i)}>Edit</Button>
                </Table.Cell>
            </Table.Row>
        ));

        return (
         <div className="App">
             <Header as='h3' content={this.state.title} />
              <form ref="myForm" className="ui form">
                 <Form.Field inline>
                     <label> Name </label>
                    <input type="text" ref="name" placeholder= "Your name"/>
                 </Form.Field>
                 <Form.Field inline>
                 <label> Address </label>
                 <input type="text" ref="address" placeholder= "Your Address"/>
                 </Form.Field>
                 <Button onClick={this.fSubmit} className="myButton">
                     Submit
                 </Button>
             </form>
             <Table celled>
                   <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Index</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { userList }
                    </Table.Body>
             </Table>
         </div>
        );
    }
}




export default CrudComponent;