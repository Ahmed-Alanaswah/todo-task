import React, { Component } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import "./TodoForm.css";
class TodoForm extends Component {
  render() {
    return (
      <div className="form">
        <input
          type="text"
          value={this.props.newTodo}
          onChange={this.props.handleChange}
        />
        <div className="button">
          <MdOutlineAddCircle onClick={this.props.addTask} size={70} />
        </div>
      </div>
    );
  }
}

export default TodoForm;
