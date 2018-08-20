import React from 'react';
import Select from 'react-select';

const ProjectsForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <input className="input" name="name" placeholder="Name" onChange={handleChange} value={data.name || ''} />
        {/* {data.errors.name && <small>{data.errors.name}</small>} */}
      </div>
      <div className="field">
        <label className="label">Type</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="type" onChange={handleChange} value={data.type || ''}>
              <option value="" disabled>Please Choose</option>
              <option>Web App</option>
              <option>Web page</option>
              <option>Website</option>
              <option>Game</option>
              <option>Blog</option>
              <option>Mobile App</option>
              <option>API</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        {/* {data.errors.type && <small>{data.errors.type}</small>} */}
      </div>
      <div className="field">
        <label className="label">Start Date</label>
        <input className="input" name="startDate" type="date" placeholder="Start Date" onChange={handleChange} value={data.startDate || ''} />
        {/* {data.errors.startDate && <small>{data.errors.startDate}</small>} */}
      </div>
      <div className="field">
        <label className="label">Status</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="status" onChange={handleChange} value={data.status || ''}>
              <option value="" disabled>Please Choose</option>
              <option>Complete</option>
              <option>Still touching up</option>
              <option>Work in progress</option>
              <option>Idea</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        {/* {data.errors.status && <small>{data.errors.status}</small>} */}
      </div>
      <div className="field">
        <label className="label">Technologies used</label>
        <Select
          multi
          name="technologies"
          value={data.technologies}
          onChange={handleChange}
          options={data.options}
        />
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''}/>
        {/* {data.errors.image && <small>{data.errors.image}</small>} */}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" name="description" placeholder="Description" onChange={handleChange} value={data.description || ''} />
        {/* {data.errors.description && <small>{data.errors.description}</small>} */}
      </div>
      <div className="field">
        <label className="label">Project Repository</label>
        <input className="input" name="projectRepo" placeholder="Project Repository" onChange={handleChange} value={data.projectRepo || ''} />
        {/* {data.errors.projectRepo && <small>{data.errors.projectRepo}</small>} */}
      </div>
      <div className="field">
        <label className="label">Solo / Team Project</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="team" onChange={handleChange} value={data.team || ''}>
              <option value="" disabled>Please Choose</option>
              <option>Solo Project</option>
              <option>Collaborative Project</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        {/* {data.errors.team && <small>{data.errors.team}</small>} */}
      </div>
      <button className="button">Submit</button>
    </form>
  );
};

export default ProjectsForm;
