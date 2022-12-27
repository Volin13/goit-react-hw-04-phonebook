import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ setFilterFormat }) => {
  const [value, setValue] = useState('');

  const handleInputChange = ({ target }) => {
    setValue(target.value);
    setFilterFormat(target.value.toLowerCase());
  };

  return (
    <input
      className={css.styledImput}
      placeholder="Find by name"
      value={value}
      onChange={handleInputChange}
    />
  );
};

Filter.propTypes = {
  setFilterFormat: PropTypes.func,
};
export default Filter;
