import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/login',
      method: 'POST',
      data: this.state
    })
      .then(res => {
      // storing token in localStorage
        Auth.setToken(res.data.token);
        // redirect to /projects
        this.props.history.push('/projects');
      })
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.replace('/login');
      });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email" autoComplete="username" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={this.handleChange} />
        </div>

        <button className="button">Submit</button>

      </form>
    );
  }

}

export default AuthLogin;
