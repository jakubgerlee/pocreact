import React, { Component } from "react";
import "./css/App.css";
import TodoItem from "./Components/TodoItem.js";
import TodoData from "./data/todoData.js";

class App extends Component {
  constructor() {
    super();
    this.state = { TodoData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log(id);
    this.setState(
      TodoData.map(prevState => {
        const updatedTodoData = prevState.TodoData.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
        });
        return {
          TodoData: updatedTodoData
        };
      })
    );
  }

  render() {
    const todoComponents = this.state.TodoData.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
