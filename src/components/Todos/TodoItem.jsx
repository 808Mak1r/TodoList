import React, { Component } from 'react'
import { Button, Checkbox } from 'antd'
import './TodoItem.scss'


export default class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <Checkbox type="checkbox" checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)} />
        <span className="title">{this.props.todo.title}</span>
        <Button type="danger" size="small" onClick={this.delete.bind(this)}>删除</Button>
      </div>
    )
  }
  toggle(e) {
    this.props.onToggle(e, this.props.todo)
  }
  delete(e) {
    this.props.onDelete(e, this.props.todo)
  }
}