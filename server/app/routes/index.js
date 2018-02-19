const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'api alive',
  }));

  app.post('/api/users', userController.create);
  app.get('/api/users', userController.list);
  app.get('/api/user/:id', userController.findById);
  app.put('/api/user/:id', userController.update);
  app.delete('/api/user/:id', userController.delete);
};
