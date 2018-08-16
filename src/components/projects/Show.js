import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class ProjectsShow extends React.Component {

  state = {
    project: {}
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios.delete(`/api/projects/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/projects'));
  }

  render() {
    return(
      <div className="columns">
        <div className="column is-half">
          <figure className="image">
            <img src={this.state.project.image} />
          </figure>
        </div>

        <div className="column is-half">
          <h2 className="title">{this.state.project.name}</h2>

          <hr />

          <Link className="button" to={`/projects/${this.state.project._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>

        </div>
      </div>
    );
  }

}

export default ProjectsShow;
