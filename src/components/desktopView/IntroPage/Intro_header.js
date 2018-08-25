import React from 'react';
import { connect } from 'react-redux';
import { startnewAccount } from '../../../actions/auth';
import { firebase } from '../../../firebase/firebase';

export class Intro_header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      error: '',
      message: ''
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

    console.log(firebase.auth().currentUser)
    console.log(this.state.name)
  }
  render() {
    return (
      <div className="intro_header_content content-container">
          <div>
              <img className="profile_img" src="\images\profile.png"/>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="header_input"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <input
              type="Password"
              placeholder="Password"
              className="header_input"
              value={this.state.Password}
              onChange={this.onPasswordChange}
            />
            <button type="submit" className="loginbtn">Login</button>
            {<p className="form__error">{this.state.error}</p>}
            {<p className="accountCreation">{this.state.message}</p>}
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startnewAccount: (email,password) => dispatch(startnewAccount(email,password))
});

export default connect(undefined, mapDispatchToProps)(Intro_header);
