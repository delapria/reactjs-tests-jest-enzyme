import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    newTodo: "",
    todo: []
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState({
      todo: [...this.state.todo, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todo.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}
