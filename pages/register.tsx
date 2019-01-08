import React from 'react';

class AuthenticationComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="navbar-brand"> Authentication</h1>
        {new Date().toString()}
      </div>
    );
  }
}

export default AuthenticationComponent;
