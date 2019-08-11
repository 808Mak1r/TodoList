import React, { Component } from 'react'

interface ITodoItemProps {
  todo: {
    title: string
  }
}

export default class TodoItem extends Component<ITodoItemProps> {
  render() {
    return <div>{this.props.todo.title}</div>
  }
}