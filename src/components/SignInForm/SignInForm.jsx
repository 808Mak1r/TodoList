/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Input, Button } from 'antd'

export default function (props) {
  return (
    <form className="signIn" onSubmit={props.onSubmit}> {/* 登录*/}
      <div className="row">
        <label>用户名</label>
        <Input type="text" value={props.formData.username}
          onChange={props.onChange.bind(null, 'username')} />
      </div>
      <div className="row">
        <label>密码</label>
        <Input type="password" value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')} />
      </div>
      <div className="row actions">
        <Button htmlType="submit">登录</Button>
        <a href="#" onClick={props.onForgotPassword}>忘记密码了？</a>
      </div>
    </form>
  )
}