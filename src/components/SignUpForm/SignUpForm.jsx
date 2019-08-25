import React from 'react';
import { Input, Button } from 'antd'

export default function (props) {
  return (
    <form className="signUp" onSubmit={props.onSubmit.bind(this)}> {/* 注册*/}
      <div className="row">
        <label>邮箱</label>
        <Input type="text" value={props.formData.email}
          onChange={props.onChange.bind(null, 'email')} />
      </div>
      <div className="row">
        <label>用户名</label>
        <Input type="text" value={props.formData.username}
          onChange={props.onChange.bind(null, 'username')} />
        {/* bind 不仅可以绑定 this，还可以绑定第一个参数 */}
      </div>
      <div className="row">
        <label>密码</label>
        <Input type="password" value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')} />
      </div>
      <div className="row actions">
        <Button htmlType="submit">注册</Button>
      </div>
    </form>
  )
}