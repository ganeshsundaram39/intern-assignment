import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './Sign-In.css';
import LinkedInButton from '../../resources/images/signin-button.png';
export default class SignIn extends Component {
  // static propTypes = {

  // }
  liLogin = () => {
    // Setup an event listener to make an API call once auth is complete
    window.IN.User.authorize(response => {
      console.log(response);
    });
    window.IN.Event.on(window.IN, 'auth', this.getProfileData);
  };
  getProfileData = () => {
    // Use the API call wrapper to request the member's basic profile data
    window.IN.API.Profile('me')
      .fields(
        'id,firstName,emailAddress,lastName,picture-urls::(original),public-profile-url,location:(name)'
      )
      .result(me => {
        const profile = me.values[0];
        this.props.isAuthorized(true);
        this.props.setUserInfo(profile);
        this.props.history.push('/');
        alert('Sign-in Successfull');
      });
  };
  render() {
    return (
      <div className="SignIn">
        <button onClick={this.liLogin}>
          <img src={LinkedInButton} alt="signIn" />
        </button>
      </div>
    );
  }
}
