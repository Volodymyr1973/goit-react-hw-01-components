import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <span className={css.status} data-online={isOnline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
