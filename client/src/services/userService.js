export const get = () =>
  fetch('http://localhost:3000/api/users')
    .then(res => res.json());

export const create = user =>
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json());

export const update = user =>
  fetch(`http://localhost:3000/api/user/${user.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json());

export const remove = userId =>
  fetch(`http://localhost:3000/api/user/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json());
