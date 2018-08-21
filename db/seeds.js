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
      technologies: ['HTML5, ', 'CSS3, ', 'JavaScript, ', 'jQuery'],
      image: 'https://github.com/sayersb/project-1-wdi/raw/master/images/chain1.gif',
      description: 'For my first project, I had one week to devise a game concept then build to completion. This is a memory based game that utilised HTML5, CSS3, SASS, JavaScript and jQuery. The computer generates a random sequence to light up the cells in order, the user then has to repeat the same order to progress to the next level and increase the sequence length by one.',
      projectRepo: 'https://github.com/sayersb/project-1-wdi',
      team: 'Solo Project'
    }]))
    .then(projects => console.log(`${projects.length} projects created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
