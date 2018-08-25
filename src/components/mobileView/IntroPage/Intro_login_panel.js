import React from 'react';
import { connect } from 'react-redux';
import { startnewAccount } from '../../../actions/auth';

export class Intro_login_panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      number: '',
      error: ''
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const validName = /^[a-zA-Z0-9_]+\@[a-z]+\.com$/.test(name);
    if( !this.state.name || !this.state.password || !validName){
      this.setState(() => ({ error: 'Please provide valid username and password.'}));
    } else {
      const jsx = this;
      firebase.auth().signInWithEmailAndPassword(this.state.name, this.state.password).then(function(user) {
        jsx.setState(() => ({message: 'Success!'}))
      }).catch(function(error) {
        const errorCode = error.code;
        console.log(errorCode);
        if(errorCode === 'auth/user-not-found') {
          if(jsx.state.password.length <= 6){
            jsx.setState(() => ({error: 'Password length less than 6 characters!'}));
          } else {
            jsx.props.startnewAccount(jsx.state.name,jsx.state.password);
            jsx.setState(() => ({error:'',message: 'New account created!'}))
          }
        } else if(errorCode === 'auth/wrong-password') {
          jsx.setState(() => ({error: 'Wrong Password!'}))
        }
      });
    }
  }
  render() {
    return (
      <div className="Intro_login_panel_grid_mobile">
        <div className="login_panel_join-us_mobile">
            <h1 className="join_us_mobile">Lorem Ipsum</h1>
            <div className="formContent">
              <form className="login_inputs_mobile" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  className="header_input login_panel_input_mobile"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
                <input
                  type="Password"
                  placeholder="Password"
                  className="header_input login_panel_input_mobile"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <button type="submit" className="loginBtn_mobile">Login</button>
                <div className="signUp">
                  <p>Don't Have and Account?</p>
                  <button className="signupBtn">Sign Up Here</button>
                </div>
              </form>
            </div>
            <div className="breaker_mobile">
              <div className="or_pad_mobile"><p className="or">OR</p></div>
            </div>
            <div className="buttons">
              <button className="fbLogin_mobile">Facebook</button>
              <button className="googleLogin_mobile">Google</button>
            </div>
            {<p className="form__error">{this.state.error}</p>}
            {<p className="accountCreation">{this.state.message}</p>}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  startnewAccount: (email,password) => dispatch(startnewAccount(email,password))
});

export default connect(undefined, mapDispatchToProps)(Intro_login_panel);
