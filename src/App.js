import React from 'react';
import './App.css';
import TodoItem from './Components/TodoItem.js';
import TodoData from './todoData.js';

function App() {
  console.log(TodoData)
  const todoComponents = TodoData.map( item => <TodoItem key={item.id} item={item}/> );
  
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  );
}

export default App;
