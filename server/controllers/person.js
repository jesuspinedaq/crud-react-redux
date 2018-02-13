const Person = require('../models').Persons;

module.exports = {
  create(req, res) {
    return Person
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        state: req.body.state,
      }).then(person => res.status(200).send(person))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Person
      .all()
      .then(persons => res.status(200).send(persons))
      .catch(error => res.status(400).send(error));
  },
  findById(req, res) {
    return Person
      .findById(req.params.id)
      .then(person => res.status(200).send(person));
  },
  update(req, res) {
    return Person
      .findById(req.params.id)
      .then((person) => {
        if (!person) {
          res.status(404).send({ message: 'Person not found' });
        }

        return person
          .update({
            first_name: req.body.first_name || Person.first_name,
            last_name: req.body.last_name || Person.last_name,
            city: req.body.city || Person.city,
            state: req.body.state || Person.state,
          })
          .then(() => res.status(200).send(person))
          .catch(error => res.status(400).send(error));
      });
  },
  delete(req, res) {
    return Person
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => res.status(200).send({ message: 'Ok' }))
      .catch(error => res.status(400).send(error));
  },
};
