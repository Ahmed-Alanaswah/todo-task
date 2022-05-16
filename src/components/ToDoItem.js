import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import "./ToDoItem.css";
export default class ToDoItem extends Component {
  render() {
    return this.props.todos.map((item, index) => (
      <div className="Card" key={item.id}>
        <div className="check-container">
          <div
            className="check"
            onClick={() => this.props.handleToggle(item.isComplete, item.id)}
          >
            {item.isComplete && (
              <BsCheckCircle size={20} style={{ color: "green" }} />
            )}
          </div>
          <li>{item.title}</li>
        </div>
        <BsTrash
          style={{ color: "red" }}
          onClick={() => this.props.deleteTask(index)}
          size={20}
        />
      </div>
    ));
  }
}
