import React, { PropTypes } from 'react';

const InputText = ({
  id, name, value, onChange, placeholder,
}) => {
  const wrapplerClass = 'form-group';
  return (
    <div className={wrapplerClass}>
      <label htmlFor={name}>Name</label>
      <input
        id={id}
        name={name}
        className="form-control"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

// InputText.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string.isRequired,
// };

export default InputText;
