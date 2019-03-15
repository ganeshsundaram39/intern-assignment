import React, { Component } from 'react';
// import PropTypes from 'prop-types'

export default class Home extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    console.log(this.props.userInfo);
    return <div>Ganesh will rock.</div>;
  }
}
