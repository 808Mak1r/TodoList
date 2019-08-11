import React, { Component } from 'react';

interface ITodoInputProps {
  content: string
}

export default class TodoInput extends Component<ITodoInputProps> {
  render() {
    return <input type="text" value={this.props.content} />
  }
}