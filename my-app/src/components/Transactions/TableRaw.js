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
  amount: 0,
};

TableRaw.propTypes = {
  amount: PropTypes.string,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
