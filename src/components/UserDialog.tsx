import React, { Component } from 'react';
import { signUp, signIn } from '../config/leanCloud'
import './UserDialog.scss'



interface IUserDialogProps {
  selected: string,
  formData: {
    username: string,
    password: string
  }
}

export default class UserDialog extends Component<any, IUserDialogProps>{
  constructor(props: any) {
    super(props)
    this.state = {
      selected: 'signUp',
      formData: {
        username: '',
        password: ''
      }
    }
  }

  switch(e: any) {
    this.setState({
      selected: e.target.value
    })
  }

  signUp(e: any) {
    e.preventDefault()
    let { username, password } = this.state.formData
    let success = (user: any) => {
      this.props.onSignUp.call(null, user)
    }
    let error = (error: any) => {
      switch (error.code) {
        case 202:
          alert('用户名已被占用')
          break
        case 203:
          alert('电子邮箱地址已经被占用')
          break
        case 204:
          alert('没有提供电子邮箱地址')
          break
        case 502:
          alert('服务器维护中')
          break
        default:
          alert(error)
          break
      }
    }
    signUp(username, password, success, error)
  }


  signIn(e: any) {
    e.preventDefault()
    let { username, password } = this.state.formData
    let success = (user: any) => {
      this.props.onSignIn.call(null, user)
    }
    let error = (error: any) => {
      switch (error.code) {
        case 205:
          alert('找不到电子邮箱地址对应的用户')
          break
        case 210:
          alert('用户名与密码不匹配')
          break
        case 211:
          alert('找不到用户')
          break
        case 502:
          alert('服务器维护中')
          break
        default:
          alert(error)
          break
      }
    }
    signIn(username, password, success, error)
  }


  changeFormDate(key: any, e: any) {
    // this.state.formData.username = e.target.value
    // this.setState(this.state)
    // 像上面这样写会看到一个警告 warning  Do not mutate state directly. Use setState()
    let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
    stateCopy.formData[key] = e.target.value
    this.setState(stateCopy)
  }

  render() {
    let signUpForm = (
      <form className="signUp" onSubmit={this.signUp.bind(this)}> {/* 注册*/}
        <div className="row">
          <label>用户名</label>
          <input type="text"
            value={this.state.formData.username}
            onChange={this.changeFormDate.bind(this, 'username')}
          />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password"
            value={this.state.formData.password}
            onChange={this.changeFormDate.bind(this, 'password')}
          />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )
    let signInForm = (
      <form className="signIn" onSubmit={this.signIn.bind(this)}> {/* 登录*/}
        <div className="row">
          <label>用户名</label>
          <input type="text"
            value={this.state.formData.username}
            onChange={this.changeFormDate.bind(this, 'username')}
          />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password"
            value={this.state.formData.password}
            onChange={this.changeFormDate.bind(this, 'password')}
          />
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
        </div>
      </form>
    )
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav>
            <label>
              <input type="radio" value="signUp"
                checked={this.state.selected === 'signUp'}
                onChange={this.switch.bind(this)}
              /> 注册</label>
            <label>
              <input type="radio" value="signIn"
                checked={this.state.selected === 'signIn'}
                onChange={this.switch.bind(this)}
              /> 登录</label>
          </nav>
          <div className="panes">
            {this.state.selected === 'signUp' ? signUpForm : null}
            {this.state.selected === 'signIn' ? signInForm : null}
          </div>
        </div>
      </div>
    )
  }
}