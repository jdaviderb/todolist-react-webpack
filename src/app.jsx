import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/todoList/todoList.jsx';

ReactDom.render(
  <TodoList/>,
  document.getElementById('container')
);
