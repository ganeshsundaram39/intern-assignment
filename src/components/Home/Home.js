import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './Home.css';
export default class Home extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    console.log(this.props.userInfo);
    return (
      <div className="Home">
        <div className="profile-pic-wrapper">
          <img src={this.props.userInfo.pictureUrls.values[0]} alt="" />
        </div>
        <div className="other-info">
          <div className="name">
            {this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName}
          </div>
          <div className="location">{this.props.userInfo.location.name}</div>
          <div className="public-profile">
            <a
              href={this.props.userInfo.publicProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Public Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}
