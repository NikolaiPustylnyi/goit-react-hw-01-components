import PropTypes from 'prop-types';
import css from './friendList.module.css';
import { FriendListItem } from './friendListitem';

export const FriendList = ({friends}) => {
   return (<ul className={css.friend_list}>
    {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
  </ul>)
}

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};

 

