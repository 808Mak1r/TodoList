import React, { Component } from 'react'
import './TodoInput.scss'

interface ITodoInputProps {
  content: string,
  onSubmit: (event: any) => void,
  onChange: (event: any) => void
}

export default class TodoInput extends Component<ITodoInputProps> {
  render() {
    return <input
      className="TodoInput"
      type="text"
      value={this.props.content}
      onChange={this.changeTitle.bind(this)}
      onKeyPress={this.submit.bind(this)} />

  }

  changeTitle(e: any) {
    this.props.onChange(e)
  }

  submit(e: any) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
}