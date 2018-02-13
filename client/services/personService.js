export const get = () =>
  fetch('http://localhost:3000/api/persons')
    .then(res => res.json());

export const create = person =>
  fetch('http://localhost:3000/api/persons', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  })
    .then(res => res.json());

export const update = person =>
  fetch(`http://localhost:3000/api/person/${person.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  })
    .then(res => res.json());

export const remove = personId =>
  fetch(`http://localhost:3000/api/person/${personId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json());
