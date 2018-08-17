// need name and type as options, also technologies used .. image .. date/time spent??

const mongoose = require('mongoose');
const moment = require('moment');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  type: { type: String, enum: ['Web App', 'Web page', 'Website', 'Game', 'Blog', 'Mobile App', 'API', 'Other' ] },
  startDate: { type: Date },
  status: { type: String, enum: ['Complete', 'Still touching up', 'Work in progress', 'Idea', 'Other' ] },
  technologies: [ String ],
  image: { type: String },
  description: { type: String },
  projectRepo: { type: String },
  team: { type: String, enum: ['Solo Project', 'Collaborative Project']}
});

projectSchema.path('startDate')
  .get(function formatDate(startDate) {
    return moment(startDate).format('LL');
  });

projectSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Project', projectSchema);
