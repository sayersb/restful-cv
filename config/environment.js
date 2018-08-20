const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/events';
const port = process.env.PORT || 4000;
const secret = 'DJGBSDGHbkjsfgiuadfs';

module.exports = { dbURI, port, secret };
