import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class ProjectsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      sort: 'name|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then(res => this.setState({ projects: res.data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredProjects = (projects) => {
    const re = new RegExp(this.state.search, 'i');
    return projects.filter( project => {
      return re.test(project.name);
    });
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  }

  sortedProjects = (projects) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(projects, prop, dir);
  }

  sortedAndFilteredProjects = () => {
    const filtered = this.filteredProjects(this.state.projects);
    return this.sortedProjects(filtered);
  }

  render() {
    return(
      <section>
        <section>
          <div className="columns">
            <div className="filters column">
              <input className="input" placeholder="Search my projects..." onChange={this.handleSearch} />
            </div>
            <div className="control column">
              <div className="select is-fullwidth">
                <select onChange={this.handleSort}>
                  <option value="name|asc">Filter By ...</option>
                  <option value="name|asc">Name (A-Z)</option>
                  <option value="name|desc">Name (Z-A)</option>
                  <option value="type|asc">Project type</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className="columns is-multiline">
            {this.sortedAndFilteredProjects().map(project =>
              <div key={project._id} className="column is-one-third-desktop is-half-tablet">
                <Link to={`/projects/${project._id}`}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={project.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h2 className="title">{project.name}</h2>
                        <h5 className="subtitle">Type: {project.type}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </section>
      </section>

    );
  }

}

export default ProjectsIndex;
