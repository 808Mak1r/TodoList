import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import 'normalize.css'
import './reset.css'
import './App.css'


interface IAppState {
  newTodo: string,
  todoList: any[]
}

class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }
  render() {
    let todos = this.state.todoList
      .filter((item) => !item.deleted)
      .map((item, index) => {
        return (
          <li key={index}>
            <TodoItem
              todo={item}
              onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)}
            />
          </li>
        )
      })


    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}
          />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

  toggle(e: any, todo: any) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }

  delete(event: any, todo: any) {
    todo.delete = true
    this.setState(this.state)
  }

  changeTitle(event: any) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  addTodo(event: any) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
}

let id = 0
function idMaker() {
  id += 1
  return id
}



export default App;
