import React from 'react';
import { connect } from 'react-redux';
import { startnewAccount } from '../../../actions/auth';
import { firebase } from '../../../firebase/firebase';

export class Intro_header extends React.Component {
  render() {
    return (
      <div className="intro_header_content_mobile content-container">
          <div>
              <img className="profile_img" src="\images\profile.png"/>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startnewAccount: (email,password) => dispatch(startnewAccount(email,password))
});

export default connect(undefined, mapDispatchToProps)(Intro_header);
