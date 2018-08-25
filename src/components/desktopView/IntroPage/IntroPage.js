import React from 'react';
import Intro_header from './Intro_header';
import Intro_profiles_panel from './Intro_profiles_panel';
import Intro_login_panel from './Intro_login_panel';
import Intro_footer from './Intro_footer';
import IntroPageMobile from '../../mobileView/IntroPage/IntroPageMobile'

export class IntroPage extends React.Component {
  render() {
    return (
      <div>
        <div className="show-for-desktop">
          <div className="Intro_header">
            <Intro_header />
          </div>
          <div className="content-container">
            <div className="intro_grid">
                <Intro_profiles_panel />
                <Intro_login_panel />
            </div>
          </div>
          <div className="Intro_footer">
            <Intro_footer />
          </div>
        </div>
        <div className="show-for-mobile">
          <IntroPageMobile />
        </div>
      </div>

    );
  }
}

export default (IntroPage);
