import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter, eventFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={eventFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  eventFilter: PropTypes.func.isRequired,
};
