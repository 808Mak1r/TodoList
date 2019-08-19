import React, { Component } from 'react';
import SignUpForm from '../SignUpForm/SignUpForm'
import SignInForm from '../SignInForm/SignInForm'

interface ISignInOrSignUpProps {
  formData: {
    email: string,
    username: string,
    password: string
  },
  onSignUp: any,
  onChange: any,
  onSignIn: any,
  onForgotPassword: any
}
interface ISignInOrSignUpState {
  selected: string,
}


export default class SignInOrSignUp extends Component<ISignInOrSignUpProps, ISignInOrSignUpState> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: 'signUp'
    }
  }

  switch(e: any) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    return (
      <div className="signInOrSignUp">
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
          {this.state.selected === 'signUp' ?
            <SignUpForm formData={this.props.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange}
            />
            : null}
          {this.state.selected === 'signIn' ?
            <SignInForm formData={this.props.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword}
            />
            : null}
        </div>
      </div>
    )
  }
}