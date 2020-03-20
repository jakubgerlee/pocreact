import React, {Component} from 'react';

class TodoItem extends Component {
  render(props) {
    return (
        <div className="todo-item">
          <input
            className="checkbox"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={ () => this.props.handleChange(this.props.item.id)}
          />
          <p>{this.props.item.text}</p>
        </div>
      );
  }
}

export default TodoItem;
