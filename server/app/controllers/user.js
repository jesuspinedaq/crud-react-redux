const Users = require('../models').Users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        state: req.body.state,
      }).then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Users
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  findById(req, res) {
    return Users
      .findById(req.params.id)
      .then(user => res.status(200).send(user));
  },
  update(req, res) {
    return Users
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          res.status(404).send({ message: 'Users not found' });
        }

        return user
          .update({
            first_name: req.body.first_name || user.first_name,
            last_name: req.body.last_name || user.last_name,
            city: req.body.city || user.city,
            state: req.body.state || user.state,
          })
          .then(() => res.status(200).send(user))
          .catch(error => res.status(400).send(error));
      });
  },
  delete(req, res) {
    return Users
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => res.status(200).send({ message: 'Ok' }))
      .catch(error => res.status(400).send(error));
  },
};
