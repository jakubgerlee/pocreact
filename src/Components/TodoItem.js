import React from "react";

class TodoItem extends React.Component {
  render(props) {
    return (
        <div className="todo-item">
          <input
            className="checkbox"
            type="checkbox"
            defaultChecked={this.props.item.completed}
          />
          <p>{this.props.item.text}</p>
        </div>
      );
  }
}

export default TodoItem;
