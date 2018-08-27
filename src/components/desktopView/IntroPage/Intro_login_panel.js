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
  onNumberChange = (e) => {
    const number = e.target.value;
    this.setState(() => ({ number }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const validName = /^[a-zA-Z0-9_]+\@[a-z]+\.com$/.test(name);
    if( !this.state.name || !this.state.password || !validName){
      this.setState(() => ({ error: 'Please provide valid username and password.'}));
    } else if(this.state.password.length <= 6){
      this.setState(() => ({error: 'Password length should be more than 6 characters!'}));
    } else {
      this.props.startnewAccount(this.state.name,this.state.password);
    }
  }
  render() {
    return (
      <div className="Intro_login_panel_grid">
        <div className="login_panel_userno">
          <p className="noOfusers">Number of Users</p>
          <p className="userCount"><span className="userCountNo">172,235 </span>and more</p>
        </div>
        <div className="login_panel_join-us">
            <h1 className="join_us">Lorem Ipsum</h1>
            <button className="fbLogin">Facebook</button>
            <button className="googleLogin">Google</button>
            <div className="breaker">
              <div className="line"></div>
              <div className="or_pad"><p className="or">OR</p></div>
            </div>
            <form className="login_inputs" onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="header_input login_panel_input"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              <input
                type="Password"
                placeholder="Password"
                className="header_input login_panel_input"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="header_input login_panel_input"
                value={this.state.number}
                onChange={this.onNumberChange}
              />
              {this.state.error && <p className="form__error">{this.state.error}</p>}
              <button type="submit" className="submitBtn">Submit</button>
            </form>

        </div>
        <button className="special_offer_btn">SPECIAL OFFERS</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  startnewAccount: (email,password) => dispatch(startnewAccount(email,password))
});

export default connect(undefined, mapDispatchToProps)(Intro_login_panel);
