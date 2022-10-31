import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h2>{message}</h2>;
}

Notification.propTypes = { message: PropTypes.string };

export { Notification };
