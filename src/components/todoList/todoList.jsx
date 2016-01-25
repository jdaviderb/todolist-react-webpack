import React from 'react';
import TodoListRow from './todoListRow.jsx'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Snackbar from 'material-ui/lib/snackbar';

export default class TodoList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {items: [], description: '', open: false, message: ''};
  }

  addTodo(event) {
    event.preventDefault();
    const nextItem = this.state.items.concat([{description: this.state.description}]);
    this.setState(
      {
        items: nextItem,
        description: '',
        message: 'creado con exito',
        open: true
      }
    );
  }

  setDescription(e) {
    this.setState({description: e.target.value});
  }

  closeMessage() {
    this.setState({open: false});
  }

  render(){
    return (
      <div>
        <TodoListRow items={this.state.items}/>
            <TextField onChange={this.setDescription.bind(this)} value={this.state.description}
                hintText="Description"
            />
          <RaisedButton label="Agregar" onClick={this.addTodo.bind(this)} />
            <Snackbar
            open={this.state.open}
            message={this.state.message}
            autoHideDuration={3000}
            onRequestClose={this.closeMessage.bind(this)}
          />
      </div>
    );
  }
}
