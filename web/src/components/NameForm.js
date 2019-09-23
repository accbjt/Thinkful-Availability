import React from 'react';

const NameForm = props => {
  const { addName, name } = props;

  return (
    <form id="name-form" className="col-md-6">
      <div className="form-group">
        <label htmlFor="name-field">Your Name</label>
        <input
          onChange={addName}
          type="text"
          id="name-field"
          value={name.text}
          className="form-control"
        />
      </div>

      {name.error && <div>Please fill in a name</div>}
    </form>
  );
};

export default NameForm;
