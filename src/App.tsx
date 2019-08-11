import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import './App.css';

interface IAppState {
  newTodo: string,
  todoList: [{ id: number, title: string }]
}

class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '第一个待办' }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}



export default App;
