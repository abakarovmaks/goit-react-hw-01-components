import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function TableRaw({ type, amount, currency }) {
  return (
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
  );
}

TableRaw.defaultProps = {
  type: 0,
  amount: 0,
  currency: 0,
};

TableRaw.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
