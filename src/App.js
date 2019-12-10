import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Learn RESTful APIs",
        completed: false
      },
      {
        id: 3,
        title: "Develop RESTful API",
        completed: false
      },
      {
        id: 4,
        title: "Build React App for the RESTful API",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
