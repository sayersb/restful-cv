import React from 'react';

const Contact = () => {
  return (
    <section className="hero has-text-centered has-text-dark is-danger">
      <div className="hero-body">
        <figure className="image is-128x128">
          <img className="is-rounded" src="https://media.licdn.com/dms/image/C5603AQH4uja8LkrWyg/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=4HhxLpCsRwrZJefnHLp9KyGHPa1BTYSblKUZ6g6bYuw"  />
        </figure>
        <hr />
        <div className="container">
          <h1 className="title">
            Contact
          </h1>
        </div>
        <hr />
        <div className="container">
          <h2 className="subtitle">
            <strong>    <a href="mailto:bradleysayers1@gmail.com">✉️ &nbsp; &nbsp; bradleysayers1@gmail.com &nbsp; &nbsp; ✉️</a>
            </strong>
          </h2>
        </div>
        <hr />
        <div className="container">
          <h2 className="subtitle">
            <strong> <a href="https://linkedin.com/in/bradley-sayers"><i className="fab fa-linkedin"></i>&nbsp; https://linkedin.com/in/bradley-sayers &nbsp;<i className="fab fa-linkedin"></i></a>
            </strong>
          </h2>
        </div>
        <hr />
        <div className="container">
          <h2 className="subtitle">
            <strong> <a href="https://git.generalassemb.ly/bradSayers"> General Assembly Profile : https://git.generalassemb.ly/bradSayers </a> </strong>
          </h2>
        </div>
        <hr />
        <div className="container">
          <h2 className="subtitle">
            <strong> <a href="https://github.com/sayersb"> Project Repositories : https://github.com/sayersb </a></strong>
          </h2>
        </div>
        <div className="container">
          <h2 className="subtitle">
            <strong>     <a href="https://git.generalassemb.ly/bradSayers">  General Assembly Work Repositories : https://git.generalassemb.ly/bradSayers</a> </strong>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
