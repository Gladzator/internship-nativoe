import React from 'react';

export class Intro_profiles_panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'User1',
      src: '/images/user-1-img.jpg',
      text: 'Lorem Ipsum Dolor Sit Amet Si',
      button: 'This is a sub tagline'
    };
  }
  User1 = () => {
    this.setState(() => ({
        user: 'User1',
        src: '/images/user-1-img.jpg',
        text: 'Lorem Ipsum Dolor Sit Amet Si',
        button: 'This is a sub tagline'
    }));
  }
  User2 = () => {
    this.setState(() => ({
        user: 'User2',
        src: '/images/user-2-img.jpg',
        text: 'Lorem Ipsum 2',
        button: 'This is a sub tagline'
    }));
  }
  User3 = () => {
    this.setState(() => ({
        user: 'User3',
        src: '/images/user-3-img.jpg',
        text: 'Lorem Ipsum 3',
        button: 'This is a sub tagline'
    }));
  }
  render() {
    return (
          <div className="Intro_profiles_panel_grid">
            <div className="user_no_grid">
              <img className="user_selected_img" id="img" src={this.state.src}></img>
              <div className="img_inside">
                <h1 className="img_text">{this.state.text}</h1>
                <button className="img_btn">{this.state.button}</button>
              </div>
                <ul className="user_no">
                <li className={"user_individual_no " + (this.state.user === 'User1' && "user")} onClick={this.User1}>User 1</li>
                <li className={"user_individual_no " + (this.state.user === 'User2' && "user")} onClick={this.User2}>User 2</li>
                <li className={"user_individual_no " + (this.state.user === 'User3' && "user")} onClick={this.User3}>User 3</li>
              </ul>
              <div className="user_description">
                <div className="user_info">
                  <div className="user_content">
                    <img className="img_desc" src="/images/user-1.jpg"/>
                    <p className="user_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="user_content">
                  <img className="img_desc" src="/images/user-2.jpg"/>
                  <p className="user_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="user_content">
                  <img className="img_desc" src="/images/user-3.jpg"/>
                  <p className="user_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Intro_profiles_panel);
