import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import s from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <Fragment>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </Fragment>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
