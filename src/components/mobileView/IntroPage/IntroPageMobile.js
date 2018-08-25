import React from 'react';
import Intro_header from './Intro_header';
import Intro_login_panel from './Intro_login_panel';
import Intro_footer from './Intro_footer';

export class IntroPageMobile extends React.Component {
  render() {
    return (
      <div>
        <div className="Intro_header">
          <Intro_header />
        </div>
        <div className="content-container">
              <Intro_login_panel />
        </div>
        <div className="Intro_footer">
          <Intro_footer />
        </div>
      </div>

    );
  }
}

export default (IntroPageMobile);
