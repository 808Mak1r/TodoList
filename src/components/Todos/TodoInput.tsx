import React, { Component } from 'react'
import './TodoInput.scss'


function submit(props: any, e: any) {
  if (e.key === 'Enter') {
    props.onSubmit(e)
  }
}


function changeTitle(props: any, e: any) {
  props.onChange(e)
}

export default function (props: any) {
  return <input type="text" value={props.content}
    className="TodoInput"
    onChange={changeTitle.bind(null, props)}
    onKeyPress={submit.bind(null, props)} />
}
