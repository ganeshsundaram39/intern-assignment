import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import SignIn from '../Sign-In/Sign-In';
import Home from '../Home/Home';
import { Route, Redirect, Switch } from 'react-router-dom';

export default class Main extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  state = {
    isAuthorized: false,
    userInfo: {}
  };
  isAuthorized = status => {
    if (status) {
      this.setState({
        isAuthorized: true
      });
    }
  };
  setUserInfo = data => {
    this.setState({
      userInfo: data
    });
  };
  componentDidMount() {
    if (window.IN.User.isAuthorized()) {
      this.setState({
        isAuthorized: true
      });
    }
  }
  render() {
    return (
      <>
        <Switch>
          {this.state.isAuthorized ? (
            <Route
              exact
              path="/"
              component={props => (
                <Home {...props} userInfo={this.state.userInfo} />
              )}
            />
          ) : null}
          <Route
            path="/sign-in"
            component={props => (
              <SignIn
                {...props}
                isAuthorized={this.isAuthorized}
                setUserInfo={this.setUserInfo}
              />
            )}
          />
          <Redirect from="/" to="/sign-in" />
        </Switch>
      </>
    );
  }
}
