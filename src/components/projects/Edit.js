import React from 'react';
import ProjectsForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ProjectsEdit extends React.Component {

  state = {}

  componentDidMount() {
    axios({
      url: `/api/projects/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => this.setState(res.data));
  }

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios({
        url: `/api/projects/${this.props.match.params.id}`,
        method: 'PUT',
        data: this.state,
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
        .then(() => this.props.history.push('/projects'));
    }

    render() {
      return (
        <ProjectsForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
      );
    }

}

export default ProjectsEdit;
