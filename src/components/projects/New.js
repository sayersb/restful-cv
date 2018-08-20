import React from 'react';
import axios from 'axios';
import ProjectsForm from './Form';
import Auth from '../../lib/Auth';

class ProjectsNew extends React.Component {

  state = {
    errors: {}
  };

  componentDidMount () {
    axios({
      url: '/api/projects',
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);
        const options = res.data.map(project => {
          return { value: project._id, label: project.name };
        });
        this.setState({ options });
      });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault;
    axios({
      url: '/api/projects',
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/projects'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    console.log(this.props);
    return (
      <ProjectsForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }

}

export default ProjectsNew;
