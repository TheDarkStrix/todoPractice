import { Component } from "react";
import Form from "../components/form";
import TodoList from "../components/TodoList";

export default class Hello extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>To Do</h1>
        <Form />
        <TodoList />
      </div>
    );
  }
}
