import React, { Component } from 'react'

interface ITodoItemProps {
  todo: {
    title: string,
    status: string
  },
  onToggle: (e: any, todo: any) => void
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
      </div>
    )
  }

  toggle(e: any) {
    this.props.onToggle(e, this.props.todo)
  }
}