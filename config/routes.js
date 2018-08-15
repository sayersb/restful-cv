const router = require('express').Router();
const projects = require('../controllers/projects');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index)
  .post(secureRoute, projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(secureRoute, projects.update)
  .delete(secureRoute, projects.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
