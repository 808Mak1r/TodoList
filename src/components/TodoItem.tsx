import React, { Component } from 'react'

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
      <div>
        <input type="checkbox"
          checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)}
        />
        {this.props.todo.title}
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