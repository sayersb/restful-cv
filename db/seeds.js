const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Project = require('../models/project');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Project.create([{
      name: 'Chain Game',
      type: 'Game',
      startDate: '2018-05-15',
      status: 'Complete',
      technologies: ['HTML5, ', 'CSS3, ', 'JavaScript(ECMAScript6), ', 'SASS, ', 'jQuery'],
      image: 'https://github.com/sayersb/project-1-wdi/raw/master/images/chain1.gif',
      description: 'For my first project, I had one week to devise a game concept then build to completion. This is a memory based game that utilised HTML5, CSS3, SASS, JavaScript and jQuery. The computer generates a random sequence to light up the cells in order, the user then has to repeat the same order to progress to the next level and increase the sequence length by one.',
      projectRepo: 'https://github.com/sayersb/project-1-wdi',
      team: 'Solo Project',
      deployed: 'https://github.com/sayersb/project-1-wdi'
    }, {
      name: 'World Cup Predictor',
      type: 'Web App',
      startDate: '2018-05-28',
      status: 'Complete',
      technologies: ['HTML5, ', 'CSS3, ', 'JavaScript(ECMAScript6), ', 'Node.js, ', 'Express, ', 'Yarn, ', 'bcrypt, ', 'body-parser, ', 'EJS, ', 'Session Authentication, ', 'method-override, ', 'MongoDB, ', 'Mongoose, ', 'Morgan, ', 'Bulma'],
      image: 'https://media.giphy.com/media/pzmkgqorR7eCjac8lg/giphy.gif',
      description: 'One week to create an Express, RESTful app setting out information on teams & players leading to predictions. Included Express, MongoDB and EJS in addition to the previous technologies utilised.',
      projectRepo: 'https://github.com/sayersb/project-2-wdi',
      team: 'Solo Project',
      deployed: 'https://worldcuppredictor.herokuapp.com'
    }, {
      name: 'Hidden Gems',
      type: 'Web App',
      startDate: '2018-06-19',
      status: 'Complete',
      technologies: ['AngularJS, ', 'SASS, ', 'JavaScript(ECMAScript6), ', 'Node.js, ', 'Express.js, ', 'HTML5, ', 'Yarn, ', 'bcrypt, ', 'body-parser, ', 'Webpack, ', 'jsonwebtoken, ', 'Chai, ', 'Request-Promise, ', 'MongoDB, ', 'bluebird, ', 'Mongoose, Babel, Chai, Filepicker-js, Mocha, wireframe.cc, supertest, Heroku, Trello, Insomnia, Slack  ' ],
      image: 'https://media.giphy.com/media/2t9y7rGuAP02hSxtPt/giphy.gif',
      description: 'Initial group project, so was the first time dealing with merge conflicts using GitHub. The first project utilising AngularJS, to create a web app showing hidden gems in London. We implemented authentication, Google Maps, outside API’s, commenting and reviewing on top of the tech used in the previous projects. This was the first time utilising the filePicker API to upload images from a users computer or social media accounts',
      projectRepo: 'https://github.com/sayersb/WDI34_PROJECT_3',
      team: 'Collaborative Project',
      deployed: 'https://hidden-gems-api.herokuapp.com'
    }, {
      name: 'ABC Events',
      type: 'Web App',
      startDate: '2018-07-08',
      status: 'Complete',
      technologies: ['React, ', 'SCSS, ', 'JavaScript(ECMAScript6), ', 'Node.js, ', 'Express, ', 'Yarn, ', 'bcrypt, ', 'body-parser, ', 'axios, ', 'Token Authentication, ', 'Chai, ', 'MongoDB, ', 'Mongoose, ', 'bluebird, ', 'Bulma, Mocha, Babel, Request-Promise, Sinon, lodash, enzyme, Webpack,  draw.io, Trello, Slack,  Paypal API, Google Maps API with Autocomplete, Eventbrite API, MailChimp Subscription API, Ticketmaster API'],
      image: 'https://github.com/sayersb/WDI-PROJECT-4/blob/master/abcevents1.gif?raw=true',
      description: 'Initial group project, so was the first time dealing with merge conflicts using GitHub. The first project utilising AngularJS, to create a web app showing hidden gems in London. We implemented authentication, Google Maps, outside API’s, commenting and reviewing on top of the tech used in the previous projects. This was the first time utilising the filePicker API to upload images from a users computer or social media accounts',
      projectRepo: 'https://github.com/sayersb/WDI-PROJECT-4',
      team: 'Collaborative Project',
      deployed: 'https://abc-events.herokuapp.com/'
    }]))
    .then(projects => console.log(`${projects.length} projects created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
