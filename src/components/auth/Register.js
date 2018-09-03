import React from 'react';
import axios from 'axios';

class AuthRegister extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      method: 'POST',
      data: this.state
    })
      .then(() => this.props.history.push('/login'));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="username">Username</label>
          <input className="input" name="username" placeholder="Username" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email" autoComplete="username" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label className="passwordConfirmation">Password Confirmation</label>
          <input className="input" type="password" name="passwordConfirmation" placeholder="Password Confirmation" autoComplete="new-password" onChange={this.handleChange}/>
        </div>
        <button className="button is-danger is-inverted is-outlined">Submit</button>
      </form>
    );
  }

}

export default AuthRegister;
