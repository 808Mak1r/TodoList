import React, { Component } from 'react'
import './TodoItem.scss'

interface ITodoItemProps {
  todo: {
    title: string,
    status: string
  },
  onToggle: (e: any, todo: any) => void,
  onDelete: (e: any, todo: any) => void
}

export default class TodoItem extends Component<ITodoItemProps> {
  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox"
          checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)}
        />
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>
    )
  }

  toggle(e: any) {
    this.props.onToggle(e, this.props.todo)
  }

  delete(e: any) {
    this.props.onDelete(e, this.props.todo)
  }
}