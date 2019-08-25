import React from 'react'
import { Input } from 'antd'
import './TodoInput.scss'

function submit(props, e) {
  if (e.key === 'Enter') {
    if (e.target.value.trim() !== '') {
      props.onSubmit(e)
    }
  }
}
function changeTitle(props, e) {
  props.onChange(e)
}


export default function (props) {
  return <Input type="text" value={props.content}
    className="TodoInput"
    placeholder="请输入待办事项" allowClear
    onChange={changeTitle.bind(null, props)}
    onKeyPress={submit.bind(null, props)} />
}
