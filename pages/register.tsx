import React from 'react';
import Layout from '../components/Layout';

class AuthenticationComponent extends React.Component {
  render() {
    return (
      <Layout>
        <form className="navbar-brand"> Authentication</form>
        <div className="form">
          <div className="formGroup">
            <h1>Email address</h1>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <div className="formGroup">
            <h1>Password</h1>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </Layout>
    );
  }
}

export default AuthenticationComponent;
