const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,    
  },
  imgSrc: {
    type: String,
    trim: true
  },
  alt: {
    type: String
  },
  page: {
    type: String, 
    trim: true
  },
  techs: {
    type: String, 
    trim: true
  },
  repo : {
    type: String,
    trim: true
  }
});

const Project = model('Project', projectSchema);

module.exports = Project;