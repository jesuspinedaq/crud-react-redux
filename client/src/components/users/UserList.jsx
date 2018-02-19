import React from 'react';
import UserTableRow from './UserTableRow.jsx';

const UserList = ({ users, redirectToAddUser, handleDelete }) => {
  return (
    <div>
      <h1>User list</h1>
      <button
        className="btn btn-primary"
        onClick={redirectToAddUser}
      >
        Add user
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Last name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <UserTableRow
                key={index}
                user={user}
                index={index}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
