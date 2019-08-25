import React, { Component } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm'
import SignInForm from '../SignInForm/SignInForm'
import { Radio } from 'antd'


export default class SignInOrSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'signUp'
    }
  }

  switch(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="signInOrSignUp">
        <nav>
          <Radio.Group onChange={this.switch.bind(this)} value={this.state.value}>
            <Radio value="signUp">注册</Radio>
            <Radio value="signIn">登录</Radio>
          </Radio.Group>
        </nav >
        <div className="panes">
          {this.state.value === 'signUp' ?
            <SignUpForm formData={this.props.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange}
            />
            : null}
          {this.state.value === 'signIn' ?
            <SignInForm formData={this.props.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword}
            />
            : null}
        </div>
      </div >
    )
  }
}