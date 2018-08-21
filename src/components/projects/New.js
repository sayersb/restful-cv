import React from 'react';
import axios from 'axios';
import ProjectsForm from './Form';
import Auth from '../../lib/Auth';

class ProjectsNew extends React.Component {

  state = {
    // selectedOptions: [],
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
          return { value: project._id, label: project.technologies };
        });
        this.setState({ options });
      });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  // handleSelectChange = selectedOptions => {
  //   const technologies = selectedOptions.map(option => option.value);
  //   this.setState({ selectedOptions, technologies }, () => console.log(this.state));
  // }

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
        // handleSelectChange={this.handleSelectChange}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }

}

export default ProjectsNew;
