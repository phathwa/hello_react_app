import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";
import Header from "./components/layout/Header";

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
  // Toggle complete
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{ 
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
}

//Delete Todo
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id
    !== id)]})
}
  render() {
    return (
      <div className="App">
        {/* <h1>React App</h1> */}
        <Header/>
        <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        delTodo = {this.delTodo} />
      </div>
    );
  }
}

export default App;
