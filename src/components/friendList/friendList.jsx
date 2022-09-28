import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = ({friends}) => {
   return (<ul className={css.friend_list}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? css.statusOnline : css.statusOffline
          }
        ></span>
        <img className={css.avatar} src={friend.avatar} alt="" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>)

}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };

