import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <section className={s.section}>
      <ul className={s.list}>
        {friends.map(item => (
          <li className={s.item} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
