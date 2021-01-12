import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendCard({ avatar, name, isOnline }) {
  const activeClass = isOnline ? s.online : s.offline;

  return (
    <Fragment>
      <span className={[s.status, activeClass].join(' ')}>{isOnline}</span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`avatar of + {name}`}
        width="50"
      />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
