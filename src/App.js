import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About"
import uuid from 'uuid'


import "./App.css";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn React",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Learn RESTful APIs",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Develop RESTful API",
        completed: false
      },
      {
        id: uuid.v4(),
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
//Add todo
addTodo = (title) => {
  // console.log(title)
  // this.setState({todos: })
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo = {this.delTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
