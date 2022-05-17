import React, { Component } from "react";
import TodoForm from "./TodoForm";
import "./TodoApp.css";
import ToDoItem from "./ToDoItem";
class ToDoApp extends Component {
  state = {
    todos: [],
    newTodo: "",
  };

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();

    let todoListLength = this.state.todos.length;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: (todoListLength += 1),
          title: this.state.newTodo,
          isComplete: false,
        },
      ],
      newTodo: "",
    });
  };

  deleteTask = (index) => {
    let newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    });
  };

  handleToggle = (isComplete, id) => {
    let isCompleted = this.state.todos.filter((item) => {
      if (item.id === id) {
        item.isComplete = !isComplete;
      }
      return item;
    });
    this.setState({
      todos: isCompleted,
    });
  };
  render() {
    return (
      <div className="container">
        <TodoForm
          newTodo={this.state.newTodo}
          todos={this.state.todos}
          handleChange={this.handleChange}
          addTask={this.addTask}
        />
        <ul>
          <ToDoItem
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            deleteTask={this.deleteTask}
          />
        </ul>
      </div>
    );
  }
}

export default ToDoApp;
