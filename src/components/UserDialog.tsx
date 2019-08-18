import React, { Component } from 'react';
import { signUp, signIn, sendPasswordResetEmail } from '../config/leanCloud'
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp/SignInOrSignUp'
import './UserDialog.scss'



interface IUserDialogProps {
  selectedTab: string,
  formData: {
    email: string,
    username: string,
    password: string
  }
}

export default class UserDialog extends Component<any, IUserDialogProps>{
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 'signInOrSignUp', //'forgotPassword'
      formData: {
        email: '',
        username: '',
        password: ''
      }
    }
  }

  signUp(e: any) {
    e.preventDefault()
    let { email, username, password } = this.state.formData
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
    signUp(email, username, password, success, error)
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


  changeFormData(key: any, e: any) {
    // this.state.formData.username = e.target.value
    // this.setState(this.state)
    // 像上面这样写会看到一个警告 warning  Do not mutate state directly. Use setState()
    let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
    stateCopy.formData[key] = e.target.value
    this.setState(stateCopy)
  }

  render() {
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          {
            this.state.selectedTab === 'signInOrSignUp' ?
              <SignInOrSignUp
                formData={this.state.formData}
                onSignIn={this.signIn.bind(this)}
                onSignUp={this.signUp.bind(this)}
                onChange={this.changeFormData.bind(this)}
                onForgotPassword={this.showForgotPassword.bind(this)}
              /> :
              <ForgotPasswordForm
                formData={this.state.formData}
                onSubmit={this.resetPassword.bind(this)}
                onChange={this.changeFormData.bind(this)}
                onSignIn={this.returnToSignIn.bind(this)}
              />
          }
        </div>
      </div>
    )
  }
  showForgotPassword() {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'forgotPassword'
    this.setState(stateCopy)
  }

  returnToSignIn() {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.selectedTab = 'signInOrSignUp'
    this.setState(stateCopy)
  }

  resetPassword() {
    sendPasswordResetEmail(this.state.formData.email, null, null)
  }
}