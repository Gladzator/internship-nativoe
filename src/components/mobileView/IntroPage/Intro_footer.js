import React from 'react';

export class Intro_footer extends React.Component {
  render() {
    return (
      <div className="intro_header_content content-container">
          <div className="footer_icon">
              <img className="profile_img" src="\images\profile.png"/>
          </div>
          <div>
            <ul>
              <li className="footer_links">FAQs</li>
              <li className="footer_links">Contact Us</li>
              <li className="footer_links">About Us</li>
              <li className="footer_links">Terms</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default (Intro_footer);
