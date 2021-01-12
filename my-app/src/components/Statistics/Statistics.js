import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map(item => (
          <li className={s.item} key={item.id}>
            <StatisticsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
