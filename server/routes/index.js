const personController = require('../controllers').person;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'api alive',
  }));

  app.post('/api/persons', personController.create);
  app.get('/api/persons', personController.list);
  app.get('/api/person/:id', personController.findById);
  app.put('/api/person/:id', personController.update);
  app.delete('/api/person/:id', personController.delete);
};
