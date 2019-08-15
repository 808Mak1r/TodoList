import React, { Component } from 'react'
import TodoInput from './components/Todos/TodoInput'
import TodoItem from './components/Todos/TodoItem'
import UserDialog from './components/UserDialog'
import { signOut } from './config/leanCloud'
import 'normalize.css'
import './reset.css'
import './App.scss'



interface IAppState {
  user: any,
  newTodo: string,
  todoList: any[]
}


class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      user: {},
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
        <h1>{this.state.user.username || '我'}的待办
          {this.state.user.id ? <button onClick={this.signOut.bind(this)}>登出</button> : null}
        </h1>
        <div className="inputWrapper">
          <TodoInput
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}
          />
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id ?
          null :
          <UserDialog
            onSignUp={this.onSignUpOrSignIn.bind(this)}
            onSignIn={this.onSignUpOrSignIn.bind(this)} />}
      </div>
    )
  }

  signOut() {
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }

  onSignUpOrSignIn(user: any) {
    //消除「不要直接修改 state」的警告
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }

  componentDidUpdate() {

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
