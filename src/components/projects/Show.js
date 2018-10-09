import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
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
      <div className="columns" style={{ marginTop: '10px'}}>
        <div className="column is-half">
          <h2 className="title has-text-centered">{this.state.project.name}</h2>
          <hr />
          <figure className="image">
            <img src={this.state.project.image} />
          </figure>
          <hr />
          <h2 className="subtitle"><strong>Technologies Used :</strong> {this.state.project.technologies}</h2>
        </div>

        <div className="column is-half">

          <h2 className="subtitle">{this.state.project.description}</h2>

          <hr />
          <h2 className="subtitle"><strong>Status : </strong>{this.state.project.status}</h2>
          <h2 className="subtitle"><strong>{this.state.project.team}</strong></h2>
          <hr />
          <h2 className="subtitle"><strong>Project Repository Link :</strong> <a href={this.state.project.projectRepo}>{this.state.project.projectRepo} </a></h2>
          <hr />
          <h2 className="subtitle"><strong>Deployed at : </strong> <a href={this.state.project.deployed}>{this.state.project.deployed} </a></h2>
          <hr />

          {/* <Link className="button" to={`/projects/${this.state.project._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button> */}

        </div>
      </div>
    );
  }

}

export default ProjectsShow;
