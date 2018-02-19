import React from 'react';
import { Link } from 'react-router-dom';

const UserTableRow = ({ user, index, handleDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td><Link className="nav-link" to={"user/" + user.id}>{user.first_name}</Link></td>
      <td>{user.last_name}</td>
      <td>{user.city}</td>
      <td>{user.state}</td>
      <td>
        <button
          type="button"
          className="btn btn-warning"
          onClick={event => handleDelete(event, user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
