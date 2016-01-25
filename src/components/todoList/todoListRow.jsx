import React from 'react';
export default class TodoListRow extends React.Component{

  render() {
    const createItem = (item) => <li key={item.description}>{item.description} </li>;
    return <ul> {this.props.items.map(createItem)} </ul>;
  }
}
