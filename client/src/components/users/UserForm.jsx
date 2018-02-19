import React, { PropTypes } from 'react';
import InputText from '../common/InputText.jsx';

const UserForm = ({ user, handleChange, save }) => {
  return (
    <div>
      <h1>User form</h1>
      <form>
        <InputText
          id="first_name"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <InputText
          id="last_name"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Enter Last name"
        />
        <InputText
          id="city"
          name="city"
          value={user.city}
          onChange={handleChange}
          placeholder="City"
        />
        <InputText
          id="state"
          name="state"
          value={user.state}
          onChange={handleChange}
          placeholder="State"
        />
        <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={save}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
