import React from 'react';
import '../css/User.css';

export default class User extends React.Component {

  render() {
    return (
      <div className="user-root">
        <div>{ `login: ${this.props.user.login }` }</div>
        <div>{ `name: ${this.props.user.name }` }</div>
      </div>
    );
  }

}
